package aquadig;

import javax.swing.SwingUtilities;

/** Desktop entry point for the AquaDig MIDlet port. */
public final class AquaDig {
  public static void main(String[] args) {
    for (int i = 0; i < args.length; i++) {
      if ("--dynamic-resolution".equals(args[i])) {
        System.setProperty("aquadig.dynamicResolution", "true");
        break;
      }
    }
    SwingUtilities.invokeLater(
        () -> {
          Mid m = new Mid();
          m.startApp();
        });
  }
}
