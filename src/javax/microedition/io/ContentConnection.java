package javax.microedition.io;

import java.io.DataInputStream;
import java.io.IOException;

public interface ContentConnection extends InputConnection {
  long getLength();

  String getEncoding();

  String getType();

  DataInputStream openDataInputStream() throws IOException;
}
