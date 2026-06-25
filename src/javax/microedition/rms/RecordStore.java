package javax.microedition.rms;

import java.io.ByteArrayOutputStream;
import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class RecordStore {
  private static final Map<String, RecordStore> OPEN = new HashMap<>();

  private static Path baseDir() {
    return Paths.get(System.getProperty("user.home"), ".aquadig");
  }

  private final String name;
  private final List<byte[]> records = new ArrayList<>();
  private final Path file;

  private RecordStore(String name) {
    this.name = name;
    Path dir = baseDir();
    try {
      Files.createDirectories(dir);
    } catch (IOException ignored) {
    }
    this.file = dir.resolve(name + ".rms");
  }

  public static RecordStore openRecordStore(String recordStoreName, boolean createIfNecessary)
      throws RecordStoreException, RecordStoreNotFoundException {
    synchronized (OPEN) {
      RecordStore existing = OPEN.get(recordStoreName);
      if (existing != null) {
        return existing;
      }
      Path f = baseDir().resolve(recordStoreName + ".rms");
      if (!createIfNecessary && !Files.isRegularFile(f)) {
        throw new RecordStoreNotFoundException();
      }
      RecordStore rs = new RecordStore(recordStoreName);
      rs.load();
      OPEN.put(recordStoreName, rs);
      return rs;
    }
  }

  private void load() {
    if (!Files.isRegularFile(file)) {
      return;
    }
    try (DataInputStream in = new DataInputStream(Files.newInputStream(file))) {
      int n = in.readInt();
      for (int i = 0; i < n; i++) {
        int len = in.readInt();
        byte[] data = new byte[len];
        in.readFully(data);
        records.add(data);
      }
    } catch (IOException e) {
      records.clear();
    }
  }

  private void save() throws RecordStoreFullException {
    try (DataOutputStream out = new DataOutputStream(Files.newOutputStream(file))) {
      out.writeInt(records.size());
      for (byte[] r : records) {
        out.writeInt(r.length);
        out.write(r);
      }
    } catch (IOException e) {
      throw new RecordStoreFullException(e.getMessage());
    }
  }

  public void closeRecordStore() {
    synchronized (OPEN) {
      try {
        save();
      } catch (RecordStoreFullException ignored) {
      }
      OPEN.remove(name);
    }
  }

  public int getNumRecords() {
    return records.size();
  }

  public int getRecordSize(int id) {
    return records.get(id - 1).length;
  }

  public byte[] getRecord(int id) {
    return records.get(id - 1);
  }

  public int addRecord(byte[] data, int offset, int len) throws RecordStoreFullException {
    byte[] copy;
    if (data == null || len == 0) {
      copy = new byte[0];
    } else {
      copy = new byte[len];
      System.arraycopy(data, offset, copy, 0, len);
    }
    records.add(copy);
    save();
    return records.size();
  }

  public void setRecord(int id, byte[] data, int offset, int len) throws RecordStoreFullException {
    byte[] copy = new byte[len];
    System.arraycopy(data, offset, copy, 0, len);
    records.set(id - 1, copy);
    save();
  }

  public RecordEnumeration enumerateRecords(
      RecordFilter filter, RecordComparator comparator, boolean keepUpdated) {
    return new RecordEnumerationImpl(this, filter, comparator, keepUpdated);
  }

  public static void deleteRecordStore(String recordStoreName) throws RecordStoreException {
    synchronized (OPEN) {
      OPEN.remove(recordStoreName);
      Path f = baseDir().resolve(recordStoreName + ".rms");
      try {
        Files.deleteIfExists(f);
      } catch (IOException e) {
        throw new RecordStoreException(e.getMessage());
      }
    }
  }
}
