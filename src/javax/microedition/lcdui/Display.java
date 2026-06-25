package javax.microedition.lcdui;

import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;
import java.awt.Toolkit;
import javax.swing.JFrame;
import javax.swing.WindowConstants;

public final class Display {
  private static Display instance;
  private final JFrame frame;
  private Displayable current;

  private Display() {
    frame = new JFrame("AquaDig");
    frame.setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);
    frame.setResizable(GameDimensions.isDynamic());
    frame.setUndecorated(true);
    // SwingJS activates the JFrame on focus return but never re-focuses the inner JPanel,
    // so key events stop reaching the canvas after the user clicks out and back in.
    frame.addWindowFocusListener(new WindowAdapter() {
      @Override
      public void windowGainedFocus(WindowEvent e) {
        if (current instanceof Canvas) {
          ((Canvas) current).requestFocus();
        }
      }
    });
    frame.addWindowListener(new WindowAdapter() {
      @Override
      public void windowActivated(WindowEvent e) {
        if (current instanceof Canvas) {
          ((Canvas) current).requestFocus();
        }
      }
    });
  }

  public static Display getDisplay(javax.microedition.midlet.MIDlet m) {
    if (instance == null) {
      instance = new Display();
    }
    return instance;
  }

  public static void shutdown() {
    if (instance != null && instance.frame != null) {
      instance.frame.dispose();
      instance = null;
    }
  }

  public void setCurrent(Displayable d) {
    if (current instanceof Canvas) {
      ((Canvas) current).hideNotifyInternal();
    }
    current = d;
    frame.getContentPane().removeAll();
    if (d instanceof Canvas) {
      Canvas c = (Canvas) d;
      frame.add(c.getPanel());
      frame.pack();
      frame.setLocationRelativeTo(null);
      frame.setVisible(true);
      c.showNotifyInternal();
      c.requestFocus();
    }
  }

  public Displayable getCurrent() {
    return current;
  }

  /** MIDP vibration; desktop uses a short system beep as feedback. */
  public void vibrate(int durationMs) {
    Toolkit.getDefaultToolkit().beep();
  }
}
