package javax.microedition.media;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;

public final class Manager {
  private Manager() {}

  public static Player createPlayer(InputStream stream, String type) throws IOException, MediaException {
    if (stream == null) {
      throw new MediaException("null stream");
    }
    byte[] data = readAll(stream);
    if (type != null && (type.contains("midi") || type.contains("x-midi"))) {
      return new MidiPlayer(data);
    }
    throw new MediaException("unsupported type: " + type);
  }

  private static byte[] readAll(InputStream in) throws IOException {
    ByteArrayOutputStream bos = new ByteArrayOutputStream();
    byte[] buf = new byte[8192];
    int n;
    while ((n = in.read(buf)) != -1) {
      bos.write(buf, 0, n);
    }
    return bos.toByteArray();
  }
}
