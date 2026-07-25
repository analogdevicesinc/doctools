<!-- lastmod 2022-08-03 -->
<!-- image -->

## General Description

The MAX4888B evaluation kit (EV kit) provides a proven design  to  evaluate  the  MAX4888B  dual  double-pole/ double-throw (2 x DPDT) switch. The device is ideal for switching  two  half-lanes  of  PCI  Express M (PCIe)  data between  two  possible  destinations  and  supports  up  to 8.0Gbps  data  rate  (Gen  III  PCIe).  The  EV  kit  is  used for  critical  tests  (i.e.,  eye  diagrams  and  s-parameter measurements  such  as  insertion  loss,  return  loss,  and off-isolation).

The  EV  kit  PCB  comes  with  a  MAX4888BETI+  installed, which  is  available  in  a  lead(Pb)-free,  28-pin  (3.5mm  x 5.5mm) TQFN package with an exposed pad. The EV kit circuit requires a 3.3V power supply capable of supplying at least 100mA.

| DESIGNATION         |   QTY | DESCRIPTION                                                             |
|---------------------|-------|-------------------------------------------------------------------------|
| C1, C2, C6, C8, C10 |     5 | 1 F F Q 10%, 6.3V X5R ceramic capacitors (0402) Murata GRM155R60J105K   |
| C3, C4, C5, C7, C9  |     5 | 1000pF Q 10%, 16V X5R ceramic capacitors (0402) Murata GRM155R61C102K   |
| C11                 |     1 | 10 F F Q 10%, 16V X5R ceramic capacitor (0805) Murata GRM21BR61C106K    |
| C12-C15             |     4 | 0.22 F F Q 10%, 10V X5R ceramic capacitors (0402) Murata GRM155R61A224K |

## MAX4888B Evaluation Kit

## Evaluates: MAX4888B

## Features

- S Eye Diagram Test Circuit with SMA Input/Output
- S SMA Connectors for Easy Data Interfacing
- S Calibration Load and No Load Traces
- S Proven PCB Layout
- S Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                   |
|---------------|-------|---------------------------------------------------------------|
| JU1, JU2      |     2 | 3-pin headers                                                 |
| P1-P12        |    12 | Edge-mount receptacle/SMA connectors                          |
| R1, R2        |     2 | 49.9 I Q 1% resistors (0402)                                  |
| U1            |     1 | 8.0Gbps dual passive switches (28 TQFN-EP) Maxim MAX4888BETI+ |
| -             |     2 | Shunts                                                        |
| -             |     1 | PCB: MAX4888B EVALUATION KIT                                  |

## Component Supplier

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |

Note:

Indicate that you are using the MAX4888B when contacting this component supplier.

PCI Express is a registered trademark of PCI-SIG Corp.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

1

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## Quick Start

## Required Equipment

- MAX4888B EV kit
- 3.3V, 100mA DC power supply
- Waveform  generator  with  a  data  rate  of  at  least 8.0Gbps (i.e., Tektronix AWG7122B)
- Digital  serial  analyzer  sampling  oscilloscope  with a  data  rate  of  at  least  8.0Gbps  (i.e.,  Tektronix DSA72004B)
- Six equal-length SMA cables

## Procedure

The EV kit is fully assembled and tested. Follow the steps below  to  verify  board  operation  and  eye  diagram/jitter measurements. Caution:  Do  not  turn  on  the  power until all connections are completed.

- 1) Connect the DC power supply to the VCC and GND PCB pads on the EV kit.
- 2) Verify  that  jumper  JU1  is  in  the  2-3  position  and jumper JU2 is in the 1-2 position.
- 3) Set  up  the  waveform  generator  for  a  bit  rate  of 8.0Gbps, 1VP-P differentially, nonreturn-to-zero (NRZ)  mode,  and  desired  pseudorandom  binary (bit) sequence (PRBS) with 2 15 -1 or 2 7 -1 patterns.
- 4) Use a pair  of  SMA  cables  to  connect  the  differential  output signals of the waveform generator to the P5 (AOUTA+) and P6 (AOUTA-) SMA connectors on the EV kit.
- 5) Using a single SMA cable, connect the trigger input of the digital serial analyzer to the trigger output of the waveform generator.
- 6) Using a single SMA cable, connect the clock input of the pattern sync module of the digital serial analyzer to the clock output of the waveform generator.
- 7) Use  the  other  pair  of  SMA  cables  to  connect both sampling channels of the digital serial analyzer to the P1 (D\_AIN+) and P2 (D\_AIN-) SMA connectors on the EV kit.
- 8) Set the digital serial analyzer to infinite persistence and select the math function of the signal ((D\_AIN+) - (D\_AIN-)).
- 9) Adjust  the  digital  serial  analyzer  vertical  scale  to 100mV/div and the horizontal scale to 200ps/div.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4888B Evaluation Kit Evaluates: MAX4888B

- 10)  Turn on the DC power supply.
- 11)  Enable the data and clock outputs on the waveform generator and observe the waveform on the digital serial analyzer.
- 12)  Save the waveform on the digital serial analyzer.
- 13)  Disable the data and clock outputs of the waveform generator.
- 14)  Turn off the DC power supply.
- 15)  Remove  the  pair  of  SMA  cables  connected  to AOUTA+ and AOUTA- on the EV kit and connect the cables to the P9 (R\_AOUT\_+) and P10 (R\_AOUT\_-) SMA connectors on the EV kit.
- 16)  Remove  the  pair  of  SMA  cables  connected  to D\_AIN+ and D\_AIN- on the EV kit and connect the cables  to  the  P7  (R\_AIN+)  and  P8  (R\_AIN-)  SMA connectors on the EV kit.
- 17)  Enable the data and clock outputs on the waveform generator and observe the waveform on the digital serial analyzer.
- 18)  Compare the current waveform to the saved waveform and observe the jitter/eye height of both systems. Take the difference in jitter/eye height and that is the extra jitter/eye height coming from the device.

## Detailed Description of Hardware

The  MAX4888B  EV  kit  provides  a  proven  design  to evaluate  the  MAX4888B  PCIe  Gen  III  8.0Gbps  passive switch. The device is a dual DPDT switch ideal for switching two half lanes of PCIe data between two destinations. The EV kit is used for critical tests (i.e., eye diagrams and s-parameter measurements such as insertion loss, return loss, and off-isolation).

For  simplicity,  only  one  channel  of  the  device  is  used in  the  EV  kit.  Only  the  AIN\_,  AOUTA\_,  and  AOUTB\_ signals  are  used  in  the  EV  kit.  All  device  output  signal traces  have  100 I differential  controlled-characteristicimpedance traces. Once the differential traces split into separate  directions,  the  traces  have  50 I single-ended controlled-characteristic impedance, which is equivalent to 100 I differentially.

The MAX4888B operates from a 3.0V to 3.6V supply that provides at least 1mA.

## Calibration Trace

There are calibration traces on the bottom of the EV kit PCB  that  are  used  as  a  reference  to  differentiate  the performance of the switch from the traces and the SMA connectors, providing a complete analysis of the device.

## No Load

The first set of calibration traces are made with no load. The trace lengths are equal to the circuit with the device. The  traces  starting  from  R\_AIN\_  and  R\_AOUT\_\_  have 50 I single-ended  controlled-characteristic  impedance. Once  the  calibration  PCB  traces  run  parallel  to  each other  and  are  matched  side-by-side,  the  traces  have 100 I differential controlled-characteristic impedance.

## MAX4888B Evaluation Kit Evaluates: MAX4888B

## Load

The second set of calibration traces are made with a 50 I load. The lengths of these traces are half of the no-load calibration traces, as detailed in the No Load section.

## SEL and SELB Jumper Selection

Table  1  shows  the  truth  table  for  the  device  control signals.  Use  the  truth  table  to  switch  D\_AIN\_  between AOUTA\_ and AOUTB\_. Jumper JU1 is used to drive the device's SEL signal and jumper JU2 is used to drive the SELB signal. When the jumpers are in the 1-2 position, the signals are high and when the jumpers are in the 2-3 position, the signals are low.

Table 1. SEL and SELB Jumper Description (JU1, JU2)

| JU1 (SEL)   | JU2 (SELB)   | SWITCHES D_AIN_ TO AOUTA_   | SWITCHES D_AIN_ TO AOUTB_   |
|-------------|--------------|-----------------------------|-----------------------------|
| 2-3*        | 2-3          | Off                         | On                          |
| 1-2         | 2-3          | Off                         | On                          |
| 2-3*        | 1-2*         | On                          | Off                         |
| 1-2         | 1-2*         | Off                         | On                          |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4888B Evaluation Kit

## Evaluates: MAX4888B

<!-- image -->

Figure 1. MAX4888B EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 2. MAX4888B EV Kit Component Placement GuideComponent Side

<!-- image -->

## MAX4888B Evaluation Kit Evaluates: MAX4888B

Figure 3. MAX4888B EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 4. MAX4888B EV Kit PCB Layout-Inner Layer 2

<!-- image -->

## MAX4888B Evaluation Kit Evaluates: MAX4888B

Figure 5. MAX4888B EV Kit PCB Layout-Inner Layer 3

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

1.0''

Figure 6. MAX4888B EV Kit PCB Layout-Solder Side

<!-- image -->

## MAX4888B Evaluation Kit Evaluates: MAX4888B

Figure 7. MAX4888B EV Kit Component Placement GuideSolder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX4888BEVKIT# | EV Kit |

# Denotes RoHS compliant.

Evaluates: MAX4888B

## MAX4888B Evaluation Kit

## Evaluates: MAX4888B

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 5/11            | Initial release | -               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

9