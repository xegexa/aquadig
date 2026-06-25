package aquadig;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.InputStream;
import java.util.Random;
import javax.microedition.lcdui.Display;
import javax.microedition.lcdui.Image;
import javax.microedition.media.Manager;
import javax.microedition.media.Player;
import javax.microedition.midlet.MIDlet;
import javax.swing.Timer;

public final class Mid extends MIDlet {
   static byte a = 100;
   static d b = null;
   private static Display q = null;
   static c c;
   public static int frameMs = 25;
   private static final long s = 1000 / frameMs;
   private static long t;
   /** Logical game time (ms); incremented each frame by {@link #s}. */
   public static volatile long clockMs;
   private Timer gameTimer;
   static boolean f = true;
   static Random rng = new Random();
   public static com.vlm.redstar.client.core.csp.a h;
   static Player i = null;
   static final String[] j = new String[]{"/res/theme.mid", "/res/credits.mid", "/res/shopping.mid", "/res/death.mid", "/res/win.mid"};
   static byte k = -1;
   final String l;
   final String m;
   public static boolean n = false;
   public long o = 0L;
   public boolean p = false;

   public Mid() {
      this.l = this.getAppProperty("MIDlet-Version");
      this.m = f();
      a = 100;
   }

   public final void startApp() {
      if (gameTimer == null) {
         q = Display.getDisplay(this);
         b = new d(this);
         q.setCurrent(b);
         f = true;
         clockMs = 0L;
         gameTimer = new Timer((int) s, new GameTick(this));
         gameTimer.setInitialDelay(0);
         gameTimer.setRepeats(true);
         gameTimer.start();
      }
   }

   /**
    * EDT frame tick (Swing {@link Timer}). Avoids {@link Thread#sleep}, which SwingJS does not
    * support; browser timing uses the same path as other Swing timers.
    */
   private void tickFrame() {
      if (!f) {
         return;
      }
      try {
         t = clockMs;
         this.c();
         clockMs += s;
         b.repaint();
         b.serviceRepaints();
      } catch (Throwable ignored) {
      }
   }

   private static final class GameTick implements ActionListener {
      private final Mid mid;

      GameTick(Mid mid) {
         this.mid = mid;
      }

      @Override
      public void actionPerformed(ActionEvent e) {
         mid.tickFrame();
      }
   }

   public final void pauseApp() {
   }

   private void c() {
      try {
         switch (a) {
            case 100:
               if (com.vlm.redstar.client.ui.d.b()) {
                  b.L.c();
                  ParticleTick.tick();
               }
               break;
            case 101:
               if (!com.vlm.redstar.client.ui.a.a()) {
                  tickIdle();
               }
               break;
            case 116:
               b.o();
               break;
         }

         if (clockMs >= this.o + 400L) {
            n = !n;
            this.o = clockMs;
         }
      } catch (Throwable var2) {
      }
   }

   private static void tickIdle() {
      if (d.e != null) {
         if (d.f > 0L) {
            d.e.g_ = d.e.g_ + (t - d.f);
            d.f = 0L;
         } else {
            d.e.g_ = d.e.g_ + s;
         }
      }

      e.p();
      g.a();
      ParticleTick.tick();
   }

   private static void e() {
      if (h != null) {
         com.vlm.redstar.client.core.csp.a.a();
      }

      ParticleTick.reset();
      if (c != null) {
         c.a();
         c = null;
      }

      if (b != null) {
         b.f();
         b = null;
      }

      System.gc();
   }

   public final void destroyApp(boolean var1) {
      f = false;
      if (gameTimer != null) {
         gameTimer.stop();
         gameTimer = null;
      }
      e();
      this.notifyDestroyed();
   }

   static Image a(String var0) {
      Image var1 = null;

      try {
         var1 = Image.createImage(var0);
      } catch (Throwable var3) {
      }

      return var1;
   }

   private static void a(byte var0) {
      try {
         byte var2 = a;
         a = 108;
         b.af = 1;
         b.ae = 1;
         b.repaint();
         b.serviceRepaints();
         i = a(j[var0], "audio/midi");
         a = var2;
      } catch (Throwable var3) {
      }
   }

   private static Player a(String var0, String var1) {
      /*Player var2 = null;
      Object var3 = new Object();

      try {
         var2 = Manager.createPlayer(var3.getClass().getResourceAsStream(var0), var1);
      } catch (Throwable var5) {
      }

      return var2;*/

      return null;
   }

   public static void a(byte var0, int var1) {
      if (com.vlm.redstar.client.ui.d.d) {
         try {
            label27: {
               if (i != null && k != var0) {
                  a();
               } else if (i != null) {
                  break label27;
               }

               a(var0);
            }

            i.realize();
            i.prefetch();
            i.setLoopCount(var1);
            i.start();
            k = var0;
         } catch (Throwable var3) {
         }
      }
   }

   static void a() {
      try {
         if (i != null) {
            if (i.getState() == 400) {
               i.stop();
            }

            i.deallocate();
            i.close();
            i = null;
            k = -1;
            System.gc();
         }
      } catch (Throwable var1) {
      }
   }

   static int a(int var0) {
      return Math.abs(rng.nextInt() % var0);
   }

   static int b(int var0) {
      return rng.nextInt() % var0;
   }

   static boolean b() {
      return rng.nextInt() >= 0;
   }

   static boolean a(int var0, int var1, int var2, int var3, int var4, int var5, int var6, int var7) {
      if (var1 + var3 < var5) {
         return false;
      } else if (var1 > var5 + var7) {
         return false;
      } else {
         return var0 + var2 < var4 ? false : var0 <= var4 + var6;
      }
   }

   public static int a(int var0, int var1) {
      int var5 = var0 >>> 24;
      int var6 = 256 - var5;
      return 0xFF0000 & (var0 & 0xFF0000) * var5 + (var1 & 0xFF0000) * var6 >> 8
         | 0xFF00 & (var0 & 0xFF00) * var5 + (var1 & 0xFF00) * var6 >> 8
         | 0xFF & (var0 & 0xFF) * var5 + (var1 & 0xFF) * var6 >> 8;
   }

   private static String f() {
      byte[] var0 = new byte[0];

      try {
         InputStream var1;
         var0 = new byte[(var1 = new Object().getClass().getResourceAsStream("/res/version.txt")).available()];
         var1.read(var0, 0, var1.available());
         var1.close();
      } catch (Throwable var2) {
      }

      return new String(var0);
   }

   static void c(int var0) {
      if (com.vlm.redstar.client.ui.d.e) {
         q.vibrate(var0);
      }
   }
}
