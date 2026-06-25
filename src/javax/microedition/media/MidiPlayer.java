package javax.microedition.media;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import javax.sound.midi.MidiSystem;
import javax.sound.midi.MidiUnavailableException;
import javax.sound.midi.Sequence;
import javax.sound.midi.Sequencer;

final class MidiPlayer implements Player {
  private final byte[] data;
  private Sequencer sequencer;
  private int state = UNREALIZED;
  private int loopCount;

  MidiPlayer(byte[] data) {
    this.data = data;
  }

  @Override
  public void realize() throws MediaException {
    if (state == CLOSED) {
      return;
    }
    try {
      if (sequencer == null) {
        sequencer = MidiSystem.getSequencer(false);
        if (sequencer == null) {
          throw new MediaException("no MIDI sequencer");
        }
        sequencer.open();
        Sequence seq = MidiSystem.getSequence(new ByteArrayInputStream(data));
        sequencer.setSequence(seq);
      }
      state = REALIZED;
    } catch (IOException | javax.sound.midi.InvalidMidiDataException e) {
      throw new MediaException(e.getMessage());
    } catch (MidiUnavailableException e) {
      throw new MediaException(e.getMessage());
    }
  }

  @Override
  public void prefetch() throws MediaException {
    if (state != CLOSED) {
      state = PREFETCHED;
    }
  }

  @Override
  public void start() throws MediaException {
    if (state == CLOSED) {
      return;
    }
    if (sequencer == null) {
      realize();
    }
    try {
      if (loopCount == -1) {
        sequencer.setLoopCount(Sequencer.LOOP_CONTINUOUSLY);
      } else {
        sequencer.setLoopCount(Math.max(0, loopCount));
      }
      sequencer.start();
      state = STARTED;
    } catch (Exception e) {
      throw new MediaException(e.getMessage());
    }
  }

  @Override
  public void stop() throws MediaException {
    if (sequencer != null && sequencer.isOpen()) {
      sequencer.stop();
    }
    if (state == STARTED) {
      state = PREFETCHED;
    }
  }

  @Override
  public void deallocate() {
    try {
      stop();
    } catch (MediaException ignored) {
    }
    if (sequencer != null && sequencer.isOpen()) {
      sequencer.close();
      sequencer = null;
    }
    state = REALIZED;
  }

  @Override
  public void close() {
    try {
      deallocate();
    } catch (Throwable ignored) {
    }
    state = CLOSED;
  }

  @Override
  public void setLoopCount(int count) {
    this.loopCount = count;
  }

  @Override
  public int getState() {
    return state;
  }
}
