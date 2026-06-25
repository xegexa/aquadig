package javax.microedition.rms;

public interface RecordEnumeration {
  int numRecords();

  byte[] nextRecord() throws InvalidRecordIDException;

  int nextRecordId() throws InvalidRecordIDException;

  void reset();

  void rebuild();

  boolean hasNextElement();

  void destroy();
}
