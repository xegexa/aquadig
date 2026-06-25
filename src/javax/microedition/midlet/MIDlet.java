package javax.microedition.midlet;

import java.io.IOException;
import java.io.InputStream;
import java.util.jar.Attributes;
import java.util.jar.Manifest;

public abstract class MIDlet {
  private static Attributes manifestAttrs;

  static {
    InputStream in = MIDlet.class.getResourceAsStream("/META-INF/MANIFEST.MF");
    if (in != null) {
      try {
        Manifest m = new Manifest(in);
        manifestAttrs = m.getMainAttributes();
      } catch (IOException e) {
        manifestAttrs = null;
      } finally {
        try {
          in.close();
        } catch (IOException ignored) {
        }
      }
    }
  }

  /** JAD/Manifest keys (e.g. {@code MIDlet-Version}, {@code Redstar-CarrierId}). */
  public String getAppProperty(String key) {
    if (manifestAttrs != null) {
      String v = manifestAttrs.getValue(key);
      if (v != null) {
        return v;
      }
    }
    return null;
  }

  protected abstract void startApp();

  protected abstract void pauseApp();

  protected abstract void destroyApp(boolean unconditional);

  protected final void notifyDestroyed() {
    javax.microedition.lcdui.Display.shutdown();
    System.exit(0);
  }

  protected final void notifyPaused() {}
}
