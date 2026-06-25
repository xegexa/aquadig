package javax.microedition.io;

import java.io.IOException;

public final class Connector {
  private Connector() {}

  public static Connection open(String name) throws IOException {
    if (name == null) {
      throw new IOException("null url");
    }
    if (name.startsWith("http://") || name.startsWith("https://")) {
      return new HttpConnectionImpl(name);
    }
    throw new IOException("Unsupported URL: " + name);
  }
}
