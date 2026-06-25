package javax.microedition.lcdui;

import java.awt.Color;
import java.awt.Dimension;
import java.awt.Graphics2D;
import java.awt.RenderingHints;
import java.awt.event.FocusAdapter;
import java.awt.event.FocusEvent;
import java.awt.event.KeyAdapter;
import java.awt.event.KeyEvent;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;
import java.awt.image.BufferedImage;
import javax.swing.JPanel;
import javax.swing.SwingUtilities;

public abstract class Canvas extends Displayable {
  public static final int UP = 1;
  public static final int DOWN = 6;
  public static final int LEFT = 2;
  public static final int RIGHT = 5;
  public static final int FIRE = 8;

  public static final int KEY_NUM0 = 48;
  public static final int KEY_NUM1 = 49;
  public static final int KEY_NUM2 = 50;
  public static final int KEY_NUM3 = 51;
  public static final int KEY_NUM4 = 52;
  public static final int KEY_NUM5 = 53;
  public static final int KEY_NUM6 = 54;
  public static final int KEY_NUM7 = 55;
  public static final int KEY_NUM8 = 56;
  public static final int KEY_NUM9 = 57;
  public static final int KEY_STAR = 42;
  public static final int KEY_POUND = 35;

  public static final int KEY_UP = -1;
  public static final int KEY_DOWN = -2;
  public static final int KEY_LEFT = -3;
  public static final int KEY_RIGHT = -4;
  public static final int KEY_SELECT = -5;
  public static final int KEY_SOFT1 = -6;
  public static final int KEY_SOFT2 = -7;

  private static final int GAME_W = GameDimensions.FIXED_WIDTH;
  private static final int GAME_H = GameDimensions.FIXED_HEIGHT;
  private static final int SCALE = GameDimensions.BUFFER_SCALE;
  private static final int BUF_W = GAME_W * SCALE;
  private static final int BUF_H = GAME_H * SCALE;

  /** Width/height in pixels of the playfield (same as panel preferred size). */
  public static final int GAME_PIXEL_WIDTH = BUF_W;
  public static final int GAME_PIXEL_HEIGHT = BUF_H;

  /** Same as game fillRect(30702); clears offscreen buffer so no ghosting between frames. */
  private static final int GAME_CLEAR_RGB = 69928;

  private final JPanel panel;
  private BufferedImage gameSurface;

  protected Canvas() {
    panel = new GamePanel(this);
    panel.setPreferredSize(new Dimension(BUF_W, BUF_H));
    panel.setBackground(new Color(GAME_CLEAR_RGB));
    panel.setOpaque(true);
    panel.setFocusable(true);
    panel.setDoubleBuffered(!Boolean.parseBoolean(System.getProperty("midp.web", "false")));
    panel.addKeyListener(new CanvasKeyAdapter(this));
    panel.addMouseListener(new CanvasMouseAdapter(this));
    panel.addFocusListener(new CanvasFocusAdapter(this));
  }

  /**
   * Re-acquire keyboard focus whenever it leaves the canvas to a non-Swing element (page body,
   * etc.). Focus moving to another Swing component — dialogs, menus — is identified by a non-null
   * {@code oppositeComponent} and left alone so dialog interaction still works.
   */
  private static final class CanvasFocusAdapter extends FocusAdapter {
    private final Canvas canvas;

    CanvasFocusAdapter(Canvas canvas) {
      this.canvas = canvas;
    }

    @Override
    public void focusLost(FocusEvent e) {
      if (e.getOppositeComponent() != null) {
        return;
      }
      SwingUtilities.invokeLater(new RequestFocusRunnable(canvas));
    }
  }

  private static final class RequestFocusRunnable implements Runnable {
    private final Canvas canvas;

    RequestFocusRunnable(Canvas canvas) {
      this.canvas = canvas;
    }

    @Override
    public void run() {
      canvas.panel.requestFocusInWindow();
    }
  }

  /**
   * Static nested UI classes use an explicit {@code Canvas} reference so Java2Script does not rely
   * on {@code b$['javax.microedition.lcdui.Canvas']} (unreliable for subclasses such as {@code
   * MenuCanvas}).
   */
  private static final class GamePanel extends JPanel {
    private final Canvas canvas;

    GamePanel(Canvas canvas) {
      this.canvas = canvas;
    }

    @Override
    protected void paintComponent(java.awt.Graphics awt) {
      super.paintComponent(awt);
      if (canvas.gameSurface == null
          || canvas.gameSurface.getWidth() != BUF_W
          || canvas.gameSurface.getHeight() != BUF_H) {
        canvas.gameSurface = new BufferedImage(BUF_W, BUF_H, BufferedImage.TYPE_INT_RGB);
      }
      Graphics2D buf = canvas.gameSurface.createGraphics();
      try {
        buf.scale(SCALE, SCALE);
        buf.setClip(0, 0, GAME_W, GAME_H);
        buf.setRenderingHint(
            RenderingHints.KEY_ANTIALIASING, RenderingHints.VALUE_ANTIALIAS_OFF);
        buf.setColor(new Color(GAME_CLEAR_RGB));
        buf.fillRect(0, 0, GAME_W, GAME_H);
        Graphics g = new Graphics(buf, false);
        canvas.paintCanvas(g);
      } finally {
        buf.dispose();
      }
      Graphics2D screen = (Graphics2D) awt;
      screen.drawImage(canvas.gameSurface, 0, 0, null);
    }
  }

  private static final class CanvasKeyAdapter extends KeyAdapter {
    private final Canvas canvas;

    CanvasKeyAdapter(Canvas canvas) {
      this.canvas = canvas;
    }

    @Override
    public void keyPressed(KeyEvent e) {
      if (e.getKeyCode() == KeyEvent.VK_ENTER) {
        // Enter acts as both left soft (-6) and middle / select (-5).
        canvas.keyPressed(KEY_SOFT1);
        canvas.keyPressed(KEY_SELECT);
        return;
      }
      canvas.keyPressed(mapKey(e));
    }

    @Override
    public void keyReleased(KeyEvent e) {
      if (e.getKeyCode() == KeyEvent.VK_ENTER) {
        canvas.keyReleased(KEY_SELECT);
        canvas.keyReleased(KEY_SOFT1);
        return;
      }
      canvas.keyReleased(mapKey(e));
    }
  }

  private static final class CanvasMouseAdapter extends MouseAdapter {
    private final Canvas canvas;

    CanvasMouseAdapter(Canvas canvas) {
      this.canvas = canvas;
    }

    @Override
    public void mousePressed(MouseEvent e) {
      // SwingJS focuses the JFrame on click, not the panel — re-grab focus so keys reach the canvas.
      canvas.requestFocus();
      canvas.pointerPressed(e.getX() / SCALE, e.getY() / SCALE);
    }

    @Override
    public void mouseReleased(MouseEvent e) {
      canvas.pointerReleased(e.getX() / SCALE, e.getY() / SCALE);
    }
  }

  private static final class PaintImmediatelyRunnable implements Runnable {
    private final Canvas canvas;

    PaintImmediatelyRunnable(Canvas canvas) {
      this.canvas = canvas;
    }

    @Override
    public void run() {
      canvas.panel.paintImmediately(0, 0, canvas.panel.getWidth(), canvas.panel.getHeight());
    }
  }

  /**
   * Maps AWT keys to MIDP key codes. Desktop layout:
   *
   * <ul>
   *   <li>Arrows or WASD — move (game) / navigate menus
   *   <li>Enter or Space — select / jump (via {@link #getGameAction})
   *   <li>Escape or Backspace — right soft / “Back” (e.g. menu, pause)
   *   <li>F1 — left soft; F2 — right soft (same as Escape)
   *   <li>Numpad 0–9 — same as phone digit keys (movement on 2/4/6/8/5, cheats, etc.)
   * </ul>
   */
  private static int mapKey(KeyEvent e) {
    int k = e.getKeyCode();
    switch (k) {
      case KeyEvent.VK_LEFT:
        return KEY_LEFT;
      case KeyEvent.VK_RIGHT:
        return KEY_RIGHT;
      case KeyEvent.VK_UP:
        return KEY_UP;
      case KeyEvent.VK_DOWN:
        return KEY_DOWN;
      case KeyEvent.VK_W:
        return KEY_UP;
      case KeyEvent.VK_S:
        return KEY_DOWN;
      case KeyEvent.VK_A:
        return KEY_LEFT;
      case KeyEvent.VK_D:
        return KEY_RIGHT;
      case KeyEvent.VK_ENTER:
        return KEY_SELECT;
      case KeyEvent.VK_SPACE:
        return KEY_SELECT;
      case KeyEvent.VK_ESCAPE:
        return KEY_SOFT2;
      case KeyEvent.VK_BACK_SPACE:
        return KEY_SOFT2;
      case KeyEvent.VK_F1:
        return KEY_SOFT1;
      case KeyEvent.VK_F2:
        return KEY_SOFT2;
      default:
        break;
    }
    if (k >= KeyEvent.VK_NUMPAD0 && k <= KeyEvent.VK_NUMPAD9) {
      return KEY_NUM0 + (k - KeyEvent.VK_NUMPAD0);
    }
    char ch = e.getKeyChar();
    if (ch >= '0' && ch <= '9') {
      return ch;
    }
    if (ch == '*') {
      return KEY_STAR;
    }
    if (ch == '#') {
      return KEY_POUND;
    }
    return k;
  }

  public JPanel getPanel() {
    return panel;
  }

  public void requestFocus() {
    panel.requestFocusInWindow();
  }

  public void repaint() {
    // repaint() is thread-safe; avoid invokeLater — it adds one frame of latency per tick (bad in CheerpJ).
    panel.repaint();
  }

  public void serviceRepaints() {
    // CheerpJ: paintImmediately + invokeAndWait from the game thread blocks on EDT every frame.
    // Async repaint coalesces; EDT path keeps synchronous paint for UI callbacks.
    if (Boolean.parseBoolean(System.getProperty("midp.web", "false"))) {
      if (SwingUtilities.isEventDispatchThread()) {
        panel.paintImmediately(0, 0, panel.getWidth(), panel.getHeight());
      } else {
        panel.repaint();
      }
      return;
    }
    Runnable paint = new PaintImmediatelyRunnable(this);
    if (SwingUtilities.isEventDispatchThread()) {
      paint.run();
    } else {
      try {
        SwingUtilities.invokeAndWait(paint);
      } catch (Exception e) {
        panel.repaint();
      }
    }
  }

  protected int getGameAction(int keyCode) {
    if (keyCode < 0) {
      switch (keyCode) {
        case KEY_UP:
          return UP;
        case KEY_DOWN:
          return DOWN;
        case KEY_LEFT:
          return LEFT;
        case KEY_RIGHT:
          return RIGHT;
        case KEY_SELECT:
          return FIRE;
        default:
          return 0;
      }
    }
    switch (keyCode) {
      case KEY_NUM2:
        return UP;
      case KEY_NUM4:
        return LEFT;
      case KEY_NUM6:
        return RIGHT;
      case KEY_NUM8:
        return DOWN;
      case KEY_NUM5:
        return FIRE;
      default:
        return 0;
    }
  }

  protected abstract void paint(Graphics g);

  private void paintCanvas(Graphics g) {
    paint(g);
  }

  public void keyPressed(int keyCode) {}

  public void keyReleased(int keyCode) {}

  protected void keyRepeated(int keyCode) {}

  protected void pointerPressed(int x, int y) {}

  protected void pointerReleased(int x, int y) {}

  protected void pointerDragged(int x, int y) {}

  protected void showNotify() {}

  protected void hideNotify() {}

  void showNotifyInternal() {
    showNotify();
  }

  void hideNotifyInternal() {
    hideNotify();
  }
}
