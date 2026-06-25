package javax.microedition.rms;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

final class RecordEnumerationImpl implements RecordEnumeration {
  private final RecordStore store;
  private final List<Integer> ids;
  private int cursor;

  RecordEnumerationImpl(
      RecordStore store, RecordFilter filter, RecordComparator comparator, boolean keepUpdated) {
    this.store = store;
    this.ids = new ArrayList<>();
    int n = store.getNumRecords();
    for (int i = 1; i <= n; i++) {
      byte[] rec = store.getRecord(i);
      if (filter == null || filter.matches(rec)) {
        ids.add(i);
      }
    }
    if (comparator != null) {
      Collections.sort(
          ids,
          Comparator.comparing(
              (Integer id) -> store.getRecord(id),
              (a, b) -> comparator.compare(a, b)));
    }
    if (keepUpdated) {
      // Optional MIDP behaviour; AquaDig passes false.
    }
    cursor = 0;
  }

  @Override
  public int numRecords() {
    return ids.size();
  }

  @Override
  public boolean hasNextElement() {
    return cursor < ids.size();
  }

  @Override
  public byte[] nextRecord() throws InvalidRecordIDException {
    if (!hasNextElement()) {
      throw new InvalidRecordIDException();
    }
    int id = ids.get(cursor++);
    return store.getRecord(id);
  }

  @Override
  public int nextRecordId() throws InvalidRecordIDException {
    if (!hasNextElement()) {
      throw new InvalidRecordIDException();
    }
    return ids.get(cursor);
  }

  @Override
  public void reset() {
    cursor = 0;
  }

  @Override
  public void rebuild() {
    cursor = 0;
  }

  @Override
  public void destroy() {
    ids.clear();
  }
}
