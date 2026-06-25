package javax.microedition.io;

import java.io.DataInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;

final class HttpConnectionImpl implements HttpConnection {
  private final HttpURLConnection conn;
  private InputStream inputStream;

  HttpConnectionImpl(String url) throws IOException {
    URL u = new URL(url);
    conn = (HttpURLConnection) u.openConnection();
  }

  @Override
  public void setRequestMethod(String method) throws IOException {
    conn.setRequestMethod(method);
  }

  @Override
  public void setRequestProperty(String key, String value) {
    conn.setRequestProperty(key, value);
  }

  @Override
  public int getResponseCode() throws IOException {
    return conn.getResponseCode();
  }

  @Override
  public String getRequestMethod() {
    return conn.getRequestMethod();
  }

  @Override
  public String getHeaderField(String name) {
    return conn.getHeaderField(name);
  }

  @Override
  public long getLength() {
    return conn.getContentLengthLong();
  }

  @Override
  public String getEncoding() {
    return conn.getContentEncoding();
  }

  @Override
  public String getType() {
    return conn.getContentType();
  }

  @Override
  public InputStream openInputStream() throws IOException {
    if (inputStream == null) {
      inputStream = conn.getInputStream();
    }
    return inputStream;
  }

  @Override
  public DataInputStream openDataInputStream() throws IOException {
    return new DataInputStream(openInputStream());
  }

  @Override
  public void close() throws IOException {
    if (inputStream != null) {
      try {
        inputStream.close();
      } finally {
        inputStream = null;
      }
    }
    conn.disconnect();
  }
}
