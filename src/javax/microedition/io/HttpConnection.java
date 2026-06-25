package javax.microedition.io;

import java.io.IOException;

public interface HttpConnection extends ContentConnection {
  int getResponseCode() throws IOException;

  String getRequestMethod();

  void setRequestMethod(String method) throws IOException;

  void setRequestProperty(String key, String value);

  String getHeaderField(String name);
}
