package javax.microedition.lcdui;

import java.awt.AlphaComposite;
import java.awt.Graphics2D;
import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import javax.imageio.ImageIO;

public class Image {
  public final BufferedImage buf;

  // Lazy sprite-sheet crop. When {@code cropped} is true this Image represents a
  // sub-region of {@code buf} that is cut out at draw time (see Graphics.drawImage).
  // The region is NOT copied out eagerly on purpose: under SwingJS a PNG is decoded
  // asynchronously by the browser, so reading its pixels at creation time races with
  // the decode and intermittently yields a blank sub-image. Drawing the source
  // sub-rect each frame waits for the decode naturally.
  final boolean cropped;
  final int cropX;
  final int cropY;
  final int cropW;
  final int cropH;

  private Image(BufferedImage buf) {
    this.buf = buf;
    this.cropped = false;
    this.cropX = 0;
    this.cropY = 0;
    this.cropW = 0;
    this.cropH = 0;
  }

  private Image(BufferedImage buf, int x, int y, int w, int h) {
    this.buf = buf;
    this.cropped = true;
    this.cropX = x;
    this.cropY = y;
    this.cropW = w;
    this.cropH = h;
  }

  public static Image fromBufferedImage(BufferedImage buf) {
    return new Image(toArgb(buf));
  }

  public static Image createImage(byte[] data, int offset, int len) {
    try {
      BufferedImage bi = ImageIO.read(new ByteArrayInputStream(data, offset, len));
      if (bi == null) {
        throw new IllegalArgumentException("bad image");
      }
      bi = toArgb(bi);
      return new Image(bi);
    } catch (IOException e) {
      throw new IllegalArgumentException(e);
    }
  }

  /** Load PNG/JPEG from the classpath (leading slash, e.g. {@code "/res/tiles.png"}). */
  public static Image createImage(String path) throws IOException {
    InputStream in = Image.class.getResourceAsStream(path);
    if (in == null) {
      throw new IOException("resource not found: " + path);
    }
    try {
      BufferedImage bi = ImageIO.read(in);
      if (bi == null) {
        throw new IOException("bad image: " + path);
      }
      return new Image(toArgb(bi));
    } finally {
      in.close();
    }
  }

  static BufferedImage toArgb(BufferedImage src) {
    if (src.getType() == BufferedImage.TYPE_INT_ARGB || src.getType() == BufferedImage.TYPE_INT_ARGB_PRE) {
      return src;
    }
    BufferedImage dst =
        new BufferedImage(src.getWidth(), src.getHeight(), BufferedImage.TYPE_INT_ARGB);
    Graphics2D g = dst.createGraphics();
    g.setComposite(AlphaComposite.Src);
    g.drawImage(src, 0, 0, null);
    g.dispose();
    return dst;
  }

  public static Image createImage(int width, int height) {
    BufferedImage bi = new BufferedImage(width, height, BufferedImage.TYPE_INT_RGB);
    return new Image(bi);
  }

  public static Image createImage(Image source) {
    BufferedImage bi =
        new BufferedImage(source.getWidth(), source.getHeight(), BufferedImage.TYPE_INT_ARGB);
    Graphics2D g = bi.createGraphics();
    g.drawImage(source.buf, 0, 0, null);
    g.dispose();
    return new Image(bi);
  }

  /** MIDP: sub-image from a sprite sheet; transform is ignored (0 = none). */
  public static Image createImage(Image source, int x, int y, int width, int height, int transform) {
    if (transform != 0) {
      throw new IllegalArgumentException("createImage transform not implemented: " + transform);
    }
    // Reference the (possibly still-decoding) source and crop it at draw time;
    // see the cropped-field comment above. Compose offsets if the source is
    // itself a crop.
    int sx = source.cropped ? source.cropX + x : x;
    int sy = source.cropped ? source.cropY + y : y;
    return new Image(source.buf, sx, sy, width, height);
  }

  public int getWidth() {
    return cropped ? cropW : buf.getWidth();
  }

  public int getHeight() {
    return cropped ? cropH : buf.getHeight();
  }

  public Graphics getGraphics() {
    Graphics2D g2 = buf.createGraphics();
    return new Graphics(g2, true);
  }
}
