package javax.microedition.lcdui;

import java.awt.AlphaComposite;
import java.awt.Color;
import java.awt.Graphics2D;
import java.awt.Rectangle;
import java.awt.RenderingHints;

public class Graphics {
  public static final int HCENTER = 1;
  public static final int VCENTER = 2;
  public static final int LEFT = 4;
  public static final int RIGHT = 8;
  public static final int TOP = 16;
  public static final int BOTTOM = 32;
  public static final int BASELINE = 64;

  public final Graphics2D g2d;
  private final boolean disposeG2d;
  private Font font;

  public Graphics(Graphics2D g2d, boolean disposeG2d) {
    this.g2d = g2d;
    this.disposeG2d = disposeG2d;
    this.font = Font.getDefaultFont();
    g2d.setFont(font.getAwtFont());
    g2d.setComposite(AlphaComposite.SrcOver);
    g2d.setRenderingHint(
        RenderingHints.KEY_INTERPOLATION, RenderingHints.VALUE_INTERPOLATION_NEAREST_NEIGHBOR);
    g2d.setRenderingHint(RenderingHints.KEY_RENDERING, RenderingHints.VALUE_RENDER_SPEED);
    g2d.setRenderingHint(RenderingHints.KEY_ANTIALIASING, RenderingHints.VALUE_ANTIALIAS_OFF);
  }

  public void dispose() {
    if (disposeG2d) {
      g2d.dispose();
    }
  }

  public void setColor(int rgb) {
    g2d.setColor(new Color((rgb >> 16) & 0xFF, (rgb >> 8) & 0xFF, rgb & 0xFF));
  }

  /** MIDP-style RGB components 0–255. */
  public void setColor(int r, int g, int b) {
    g2d.setColor(new Color(r & 0xFF, g & 0xFF, b & 0xFF));
  }

  public int getColor() {
    Color c = g2d.getColor();
    return (c.getRed() << 16) | (c.getGreen() << 8) | c.getBlue();
  }

  public void setFont(Font f) {
    this.font = f;
    g2d.setFont(f.getAwtFont());
  }

  public Font getFont() {
    return font;
  }

  private Rectangle clipBounds() {
    Rectangle r = g2d.getClipBounds();
    if (r == null) {
      return new Rectangle(0, 0, GameDimensions.getWidth(), GameDimensions.getHeight());
    }
    return r;
  }

  public int getClipX() {
    return clipBounds().x;
  }

  public int getClipY() {
    return clipBounds().y;
  }

  public int getClipWidth() {
    return clipBounds().width;
  }

  public int getClipHeight() {
    return clipBounds().height;
  }

  public void setClip(int x, int y, int width, int height) {
    g2d.setClip(x, y, width, height);
  }

  public void clipRect(int x, int y, int width, int height) {
    g2d.clipRect(x, y, width, height);
  }

  public void translate(int dx, int dy) {
    g2d.translate(dx, dy);
  }

  /** Current translation X from the graphics transform (MIDP-style). */
  public int getTranslateX() {
    return (int) g2d.getTransform().getTranslateX();
  }

  /** Current translation Y from the graphics transform (MIDP-style). */
  public int getTranslateY() {
    return (int) g2d.getTransform().getTranslateY();
  }

  public void fillRect(int x, int y, int w, int h) {
    g2d.fillRect(x, y, w, h);
  }

  public void fillArc(int x, int y, int width, int height, int startAngle, int arcAngle) {
    g2d.fillArc(x, y, width, height, startAngle, arcAngle);
  }

  public void drawRect(int x, int y, int w, int h) {
    g2d.drawRect(x, y, w, h);
  }

  public void fillRoundRect(int x, int y, int w, int h, int aw, int ah) {
    g2d.fillRoundRect(x, y, w, h, aw, ah);
  }

  public void drawRoundRect(int x, int y, int w, int h, int aw, int ah) {
    g2d.drawRoundRect(x, y, w, h, aw, ah);
  }

  public void drawLine(int x1, int y1, int x2, int y2) {
    g2d.drawLine(x1, y1, x2, y2);
  }

  public void drawImage(Image img, int x, int y, int anchor) {
    int w = img.getWidth();
    int h = img.getHeight();
    int[] tl = anchorTopLeft(x, y, w, h, anchor);
    if (img.cropped) {
      g2d.drawImage(img.buf, tl[0], tl[1], tl[0] + w, tl[1] + h,
          img.cropX, img.cropY, img.cropX + w, img.cropY + h, null);
    } else {
      g2d.drawImage(img.buf, tl[0], tl[1], null);
    }
  }

  public static int[] anchorTopLeft(int x, int y, int w, int h, int anchor) {
    int left = x;
    int top = y;
    if ((anchor & LEFT) != 0) {
      left = x;
    } else if ((anchor & HCENTER) != 0) {
      left = x - w / 2;
    } else if ((anchor & RIGHT) != 0) {
      left = x - w;
    }
    if ((anchor & TOP) != 0) {
      top = y;
    } else if ((anchor & VCENTER) != 0) {
      top = y - h / 2;
    } else if ((anchor & BOTTOM) != 0) {
      top = y - h;
    } else if ((anchor & BASELINE) != 0) {
      top = y;
    }
    return new int[] {left, top};
  }

  public void drawString(String str, int x, int y, int anchor) {
    if (str == null) {
      return;
    }
    java.awt.FontMetrics fm = g2d.getFontMetrics();
    int sw = fm.stringWidth(str);
    int sh = fm.getHeight();
    int ascent = fm.getAscent();
    int bx = x;
    int by = y;
    if ((anchor & LEFT) != 0) {
      bx = x;
    } else if ((anchor & HCENTER) != 0) {
      bx = x - sw / 2;
    } else if ((anchor & RIGHT) != 0) {
      bx = x - sw;
    }
    if ((anchor & TOP) != 0) {
      by = y + ascent;
    } else if ((anchor & VCENTER) != 0) {
      by = y + ascent - sh / 2;
    } else if ((anchor & BOTTOM) != 0) {
      by = y - (sh - ascent);
    } else if ((anchor & BASELINE) != 0) {
      by = y;
    } else {
      by = y + ascent;
    }
    g2d.drawString(str, bx, by);
  }

  public void drawSubstring(String str, int offset, int len, int x, int y, int anchor) {
    if (str == null || offset < 0 || len < 0 || offset + len > str.length()) {
      return;
    }
    drawString(str.substring(offset, offset + len), x, y, anchor);
  }

  public void fillTriangle(int x1, int y1, int x2, int y2, int x3, int y3) {
    int[] xs = {x1, x2, x3};
    int[] ys = {y1, y2, y3};
    g2d.fillPolygon(xs, ys, 3);
  }
}
