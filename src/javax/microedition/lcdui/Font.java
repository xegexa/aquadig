package javax.microedition.lcdui;

import java.awt.FontMetrics;
import java.awt.Graphics2D;
import java.awt.image.BufferedImage;

public final class Font {
  public static final int STYLE_PLAIN = 0;
  public static final int STYLE_BOLD = 1;
  public static final int STYLE_ITALIC = 2;
  public static final int STYLE_UNDERLINED = 4;

  public static final int SIZE_SMALL = 8;
  public static final int SIZE_MEDIUM = 0;
  public static final int SIZE_LARGE = 16;

  public static final int FACE_SYSTEM = 0;
  public static final int FACE_MONOSPACE = 32;
  public static final int FACE_PROPORTIONAL = 64;

  private static final Font[][][] CACHE = new Font[3][4][3];

  private final java.awt.Font awtFont;

  private Font(java.awt.Font f) {
    this.awtFont = f;
  }

  java.awt.Font getAwtFont() {
    return awtFont;
  }

  public static Font getFont(int face, int style, int size) {
    int faceIdx = face == FACE_MONOSPACE ? 1 : face == FACE_PROPORTIONAL ? 2 : 0;
    int styleIdx = Math.min(3, style & 3);
    int sizeIdx = size == SIZE_SMALL ? 0 : size == SIZE_LARGE ? 2 : 1;
    Font cached = CACHE[faceIdx][styleIdx][sizeIdx];
    if (cached != null) {
      return cached;
    }
    int awtSize = 12;
    if (size == SIZE_SMALL || size == 8) {
      awtSize = 8;
    } else if (size == SIZE_LARGE || size == 16) {
      awtSize = 14;
    }
    int awtStyle = java.awt.Font.PLAIN;
    if ((style & STYLE_BOLD) != 0) {
      awtStyle |= java.awt.Font.BOLD;
    }
    if ((style & STYLE_ITALIC) != 0) {
      awtStyle |= java.awt.Font.ITALIC;
    }
    String name = java.awt.Font.SANS_SERIF;
    if (face == FACE_MONOSPACE) {
      name = java.awt.Font.MONOSPACED;
    }
    java.awt.Font f = new java.awt.Font(name, awtStyle, awtSize);
    cached = new Font(f);
    CACHE[faceIdx][styleIdx][sizeIdx] = cached;
    return cached;
  }

  public static Font getDefaultFont() {
    return getFont(FACE_PROPORTIONAL, STYLE_PLAIN, SIZE_SMALL);
  }

  public int getStyle() {
    return awtFont.getStyle();
  }

  public int getSize() {
    return awtFont.getSize();
  }

  public int getHeight() {
    return metrics().getHeight();
  }

  public int getBaselinePosition() {
    return metrics().getAscent();
  }

  public int charWidth(char ch) {
    return metrics().charWidth(ch);
  }

  public int stringWidth(String str) {
    return metrics().stringWidth(str);
  }

  public int substringWidth(String str, int offset, int len) {
    if (offset < 0 || len < 0 || offset + len > str.length()) {
      return 0;
    }
    return metrics().stringWidth(str.substring(offset, offset + len));
  }

  private FontMetrics metrics() {
    BufferedImage bi = new BufferedImage(1, 1, BufferedImage.TYPE_INT_ARGB);
    Graphics2D g2 = bi.createGraphics();
    g2.setFont(awtFont);
    FontMetrics fm = g2.getFontMetrics(awtFont);
    g2.dispose();
    return fm;
  }
}
