package javax.microedition.lcdui;

/**
 * Logical framebuffer size for the desktop MIDP stack and AquaDig.
 *
 * <p>Fixed mode (default): logical size {@link #FIXED_WIDTH}×{@link #FIXED_HEIGHT}, window size matches
 * the 2× scaled buffer (see {@link Canvas}).
 *
 * <p>Dynamic mode: the window is resizable; logical size tracks the canvas panel in <em>physical</em>
 * pixels divided by {@link #BUFFER_SCALE} (same 2× upscale as fixed mode: each logical pixel is drawn
 * as a 2×2 block).
 *
 * <p>Enable resizable / dynamic logical size with JVM flag {@code -Daquadig.dynamicResolution=true}
 * or program argument {@code --dynamic-resolution} before starting the MIDlet (see {@link aquadig.AquaDig}).
 */
public final class GameDimensions {
  /** Logical → framebuffer pixels (matches {@link Canvas} scaling). */
  public static final int BUFFER_SCALE = 2;

  /** Default logical size: classic MIDP portrait (2× buffer in {@link Canvas}). */
  public static final int FIXED_WIDTH = 400;
  public static final int FIXED_HEIGHT = 300;

  /** @deprecated use {@link #FIXED_WIDTH} */
  public static final int WIDTH = FIXED_WIDTH;

  /** @deprecated use {@link #FIXED_HEIGHT} */
  public static final int HEIGHT = FIXED_HEIGHT;

  private static volatile boolean dynamic =
      Boolean.parseBoolean(System.getProperty("aquadig.dynamicResolution", "false"));

  private static volatile int runtimeWidth = FIXED_WIDTH;
  private static volatile int runtimeHeight = FIXED_HEIGHT;

  private GameDimensions() {}

  public static boolean isDynamic() {
    return dynamic;
  }

  public static void setDynamic(boolean v) {
    dynamic = v;
  }

  /** Logical width in game/MIDP coordinates (pixels). */
  public static int getWidth() {
    return dynamic ? runtimeWidth : FIXED_WIDTH;
  }

  /** Logical height in game/MIDP coordinates (pixels). */
  public static int getHeight() {
    return dynamic ? runtimeHeight : FIXED_HEIGHT;
  }

  /**
   * Updates runtime logical size from the panel's physical size (dynamic mode). Logical width/height
   * are {@code physical / BUFFER_SCALE} so rendering stays 2× scaled like fixed mode.
   *
   * @return true if logical width or height changed
   */
  public static boolean setRuntimeLogicalSizeIfChanged(int physicalWidth, int physicalHeight) {
    if (!dynamic) {
      return false;
    }
    int lw = Math.max(1, physicalWidth / BUFFER_SCALE);
    int lh = Math.max(1, physicalHeight / BUFFER_SCALE);
    if (lw == runtimeWidth && lh == runtimeHeight) {
      return false;
    }
    runtimeWidth = lw;
    runtimeHeight = lh;
    return true;
  }

  /** Resets runtime dimensions to fixed defaults (e.g. when toggling dynamic off). */
  public static void resetRuntimeToFixed() {
    runtimeWidth = FIXED_WIDTH;
    runtimeHeight = FIXED_HEIGHT;
  }
}
