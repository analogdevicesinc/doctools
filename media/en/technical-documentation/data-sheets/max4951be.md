<!-- lastmod 2022-08-04 -->
<!-- image -->

<!-- image -->

## SATA I/II/III Bidirectional Redriver with Input Equalization and Preemphasis

## General Description

The MAX4951BE dual-channel buffer is ideal to redrive serial ATA (SATA) I, SATA II, and SATA III signals and features high electrostatic discharge (ESD) Q 8kV Human Body Model (HBM) protection. The MAX4951BE can be placed  nearly  anywhere  on  the  motherboard  to  overcome board losses and produce an eSATA-compatible signal level. This device is SATA specification v.2.6 (gold standard)-compliant,  while  overcom  ing  losses  in  the PCB and eSATA connector.

The MAX4951BE features very low standby current for power-sensitive applications. This device features hardware SATA-drive cable detection, keeping the power low in standby mode. The device also features an independent channel, dynamic power-down mode where power consumption is reduced when no input signal is present.

The MAX4951BE preserves signal integrity at the receiver  by  reestablishing  full  output  levels  and  can  reduce the  total  system  jitter  (TJ)  by  providing  input  equalization.  This  device  features  channel-independent  digital preemphasis controls to drive SATA outputs over longer trace  lengths  or  to  meet  eSATA  specifications.  SATA Out-Of-Band (OOB) signaling is supported using highspeed OOB signal detection on the inputs and squelch on the corresponding outputs. Inputs and outputs are all internally 50 I terminated and must be AC-coupled to the SATA controller IC and SATA device.

The  MAX4951BE  operates  from  a  single  +3.3V  (typ) supply, and is available in a small, 4mm x 4mm TQFN package  with  flow-through  traces  for  ease  of  layout. This device is specified over the 0 N C to +70 N C operating temperature range.

## Applications

Laptop Computers

Servers Desktop Computers Docking Stations Data Storage/Workstations

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Features

- S Single +3.3V Supply Operation
- S Low-Power, 500µA (typ) eSATA Cable Detect
- S Drive Detection
- S Dynamic Power Reduction Reduced Power Consumption in Active Mode
- S Fixed Input Equalization Permits Longer Traces Leading to the Device
- S Selectable Output Preemphasis Improved Output Eye
- S SATA I (1.5Gbps) and SATA II (3.0Gbps) Compliant
- S SATA III (6.0Gbps) Compliant
- S Supports eSATA Output Levels
- S Supports SATA OOB Signaling
- S OOB Detection: 8ns (max)
- S Internal Input/Output 50 I Termination Resistors
- S Inline Signal Traces for Flow-Through Layout
- S Space-Saving, 4mm x 4mm TQFN Package with Exposed Pad
- S High ESD Protection on All Pins: ±8kV (HBM)

## Ordering Information

| PART          | TEMP RANGE       | PIN-PACKAGE   |
|---------------|------------------|---------------|
| MAX4951BECTP+ | 0 N C to +70 N C | 20 TQFN-EP*   |

1

## SATA I/II/III Bidirectional Redriver with Input Equalization and Preemphasis

## ABSOLUTE MAXIMUM RATINGS

| (All voltages referenced to GND unless otherwise noted.)                                                     |
|--------------------------------------------------------------------------------------------------------------|
| VCC .......................................................................-0.3V to +4.0V                    |
| AINP, AINM, BINP, BINM, EN, CAD , PA, PB (Note 1).......................................-0.3V to (VCC +0.4V) |
| Short-Circuit Output Current (BOUTP, BOUTM, AOUTP, AOUTM)........................... Q 30mA                  |
| Continuous Current at Inputs (AINP, AINM, BINP, BINM)............................................ Q 5mA      |

| Continuous Power Dissipation (T A = +70 N C) TQFN (derate 25.6mW/ N C above +70 N C)..................2051mW   |
|----------------------------------------------------------------------------------------------------------------|
| ESD Protection on All Pins (HBM)....................................... Q 8kV                                  |
| Operating Temperature Range............................. 0 N C to +70 N C                                      |
| Storage Temperature Range............................ -55 N C to +150 N C                                      |
| Lead Temperature (soldering, 10s) ................................+300 N C                                     |
| Soldering Temperature (reflow) ......................................+260 N C                                  |

Note 1: All I/O pins are clamped by internal diodes.

## PACKAGE THERMAL CHARACTERISTICS (Note 2)

## TQFN

Junction-to-Ambient Thermal Resistance ( q JA)  ...........39°C/W

Junction-to-Case Thermal Resistance ( q JC)  ..................6°C/W

Note 2: Package thermal resistances were obtained using the method described in JEDEC specification JESD51-7, using a fourlayer board. For detailed information on package thermal considerations, refer to www.maxim-ic.com/thermal-tutorial .

Stresses beyond those listed under 'Absolute Maximum Ratings' may cause permanent damage to the device. These are stress ratings only, and functional operation of the device at these or any other conditions beyond those indicated in the operational sections of the specifications is not implied. Exposure to absolute maximum rating conditions for extended periods may affect device reliability.

## ELECTRICAL CHARACTERISTICS

(VCC = +3.0V to +3.6V, CL = 12nF, RL = 50 I , TA = 0 N C to +70 N C, unless otherwise noted. Typical values are at VCC = +3.3V, TA = +25 N C.) (Note 3)

| PARAMETER                                   | SYMBOL         | CONDITIONS                                        |                 | MIN            | TYP            | MAX            | UNITS          |
|---------------------------------------------|----------------|---------------------------------------------------|-----------------|----------------|----------------|----------------|----------------|
| Operating Power-Supply Range                | VCC            |                                                   |                 | 3.0            |                | 3.6            | V              |
| Operating Supply Current                    | ICC            | PA = PB = V CC; D10.2 pattern, f = 1.5Gbps        |                 |                | 77             | 92             | mA             |
| Operating Supply Current                    | ICC            | PA = PB = GND; D10.2 pattern, f = 1.5Gbps         |                 |                | 62             | 76             | mA             |
| Average Supply Current in Normal Operation  |                | Duty cycle is 25% active, 75% idle; D10.2 pattern | Preemphasis on  |                | 30             |                | mA             |
| Average Supply Current in Normal Operation  |                | Duty cycle is 25% active, 75% idle; D10.2 pattern | Preemphasis off |                | 26             |                | mA             |
| Standby Supply Current                      | I STBY         | EN = GND or CAD = VCC                             |                 |                | 500            | 750            | F A            |
| Dynamic Power-Down Current                  | I DYNPD        |                                                   |                 |                | 14             | 20             | mA             |
| Single-Ended Input Resistance               | Z RX-SE-DC     | Single-ended to VCC (Note                         | 4)              | 40             | 50             |                | I              |
| Differential Input Resistance               | Z RX-DIFF- DC  | (Note 4)                                          |                 | 85             | 100            | 115            | I              |
| Single-Ended Output Resistance              | Z TX-SE-DC     | Single-ended to VCC (Note                         | 4)              | 40             | 50             |                | I              |
| Differential Output Resistance              | Z TX-DIFF-DC   | (Note 4)                                          |                 | 85             | 100            | 115            | I              |
| AC PERFORMANCE                              | AC PERFORMANCE | AC PERFORMANCE                                    | AC PERFORMANCE  | AC PERFORMANCE | AC PERFORMANCE | AC PERFORMANCE | AC PERFORMANCE |
| Differential Input Return Loss (Notes 4, 5) | RL RX-DIFF     | f = 150MHz to 300MHz                              |                 | 18             |                |                | dB             |
| Differential Input Return Loss (Notes 4, 5) | RL RX-DIFF     | f = 300MHz to 600MHz                              |                 | 14             |                |                | dB             |
| Differential Input Return Loss (Notes 4, 5) | RL RX-DIFF     | f = 600MHz to 1200MHz                             |                 | 10             |                |                | dB             |
| Differential Input Return Loss (Notes 4, 5) | RL RX-DIFF     | f = 1.2GHz to 2.4GHz                              |                 | 8              |                |                | dB             |
| Differential Input Return Loss (Notes 4, 5) | RL RX-DIFF     | f = 2.4GHz to 3.0GHz                              |                 | 3              |                |                | dB             |
| Differential Input Return Loss (Notes 4, 5) | RL RX-DIFF     | f = 3.0GHz to 5.0GHz                              |                 | 1              |                |                | dB             |

2      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## SATA I/II/III Bidirectional Redriver with Input Equalization and Preemphasis

## ELECTRICAL CHARACTERISTICS (continued)

(VCC = +3.0V to +3.6V, CL = 12nF, RL = 50 I , TA = 0 N C to +70 N C, unless otherwise noted. Typical values are at VCC = +3.3V, TA = +25 N C.) (Note 3)

| PARAMETER                                                  | SYMBOL           | CONDITIONS                                     | CONDITIONS                                     |   MIN |   TYP |   MAX | UNITS   |
|------------------------------------------------------------|------------------|------------------------------------------------|------------------------------------------------|-------|-------|-------|---------|
| Common-Mode Input Return Loss (Notes 4, 5)                 | RL RX-CM         | f = 150MHz to 300MHz                           | f = 150MHz to 300MHz                           |     5 |       |       | dB      |
| Common-Mode Input Return Loss (Notes 4, 5)                 | RL RX-CM         | f = 300MHz to 600MHz                           | f = 300MHz to 600MHz                           |     5 |       |       | dB      |
| Common-Mode Input Return Loss (Notes 4, 5)                 | RL RX-CM         | f = 600MHz to 1200MHz                          | f = 600MHz to 1200MHz                          |     2 |       |       | dB      |
| Common-Mode Input Return Loss (Notes 4, 5)                 | RL RX-CM         | f = 1.2GHz to 2.4GHz                           | f = 1.2GHz to 2.4GHz                           |     1 |       |       | dB      |
| Common-Mode Input Return Loss (Notes 4, 5)                 | RL RX-CM         | f = 2.4GHz to 3.0GHz                           | f = 2.4GHz to 3.0GHz                           |     1 |       |       | dB      |
| Common-Mode Input Return Loss (Notes 4, 5)                 | RL RX-CM         | f = 3.0GHz to 5.0GHz                           | f = 3.0GHz to 5.0GHz                           |     1 |       |       | dB      |
| Differential Output Return Loss (Notes 4, 5)               | RL TX-DIFF       | f = 150MHz to 300MHz                           | f = 150MHz to 300MHz                           |    14 |       |       | dB      |
| Differential Output Return Loss (Notes 4, 5)               | RL TX-DIFF       | f = 300MHz to 600MHz                           | f = 300MHz to 600MHz                           |     8 |       |       | dB      |
| Differential Output Return Loss (Notes 4, 5)               | RL TX-DIFF       | f = 600MHz to 1200MHz                          | f = 600MHz to 1200MHz                          |     6 |       |       | dB      |
| Differential Output Return Loss (Notes 4, 5)               | RL TX-DIFF       | f = 1.2GHz to 2.4GHz                           | f = 1.2GHz to 2.4GHz                           |     6 |       |       | dB      |
| Differential Output Return Loss (Notes 4, 5)               | RL TX-DIFF       | f = 2.4GHz to 3.0GHz                           | f = 2.4GHz to 3.0GHz                           |     3 |       |       | dB      |
| Differential Output Return Loss (Notes 4, 5)               | RL TX-DIFF       | f = 3.0GHz to 5.0GHz                           | f = 3.0GHz to 5.0GHz                           |     1 |       |       | dB      |
| Common-Mode Output Return Loss (Notes 4, 5)                | RL TX-CM         | f = 150MHz to 300MHz                           | f = 150MHz to 300MHz                           |     8 |       |       | dB      |
| Common-Mode Output Return Loss (Notes 4, 5)                | RL TX-CM         | f = 300MHz to 600MHz                           | f = 300MHz to 600MHz                           |     5 |       |       | dB      |
| Common-Mode Output Return Loss (Notes 4, 5)                | RL TX-CM         | f = 600MHz to 1200MHz                          | f = 600MHz to 1200MHz                          |     2 |       |       | dB      |
| Common-Mode Output Return Loss (Notes 4, 5)                | RL TX-CM         | f = 1.2GHz to 2.4GHz                           | f = 1.2GHz to 2.4GHz                           |     1 |       |       | dB      |
| Common-Mode Output Return Loss (Notes 4, 5)                | RL TX-CM         | f = 2.4GHz to 3.0GHz                           | f = 2.4GHz to 3.0GHz                           |     1 |       |       | dB      |
| Common-Mode Output Return Loss (Notes 4, 5)                | RL TX-CM         | f = 3.0GHz to 5.0GHz                           | f = 3.0GHz to 5.0GHz                           |     1 |       |       | dB      |
| Common-Mode to Differential Input Return Loss (Notes 4, 5) | RL RX-CM- DM     | f = 150MHz to 300MHz                           | f = 150MHz to 300MHz                           |    30 |       |       | dB      |
| Common-Mode to Differential Input Return Loss (Notes 4, 5) | RL RX-CM- DM     | f = 300MHz to 600MHz                           | f = 300MHz to 600MHz                           |    20 |       |       | dB      |
| Common-Mode to Differential Input Return Loss (Notes 4, 5) | RL RX-CM- DM     | f = 600MHz to 1200MHz                          | f = 600MHz to 1200MHz                          |    10 |       |       | dB      |
| Common-Mode to Differential Input Return Loss (Notes 4, 5) | RL RX-CM- DM     | f = 1.2GHz to 2.4GHz                           | f = 1.2GHz to 2.4GHz                           |    10 |       |       | dB      |
| Common-Mode to Differential Input Return Loss (Notes 4, 5) | RL RX-CM- DM     | f = 2.4GHz to 3.0GHz                           | f = 2.4GHz to 3.0GHz                           |     4 |       |       | dB      |
| Common-Mode to Differential Input Return Loss (Notes 4, 5) | RL RX-CM- DM     | f = 3.0GHz to 5.0GHz                           | f = 3.0GHz to 5.0GHz                           |     4 |       |       | dB      |
| Common-Mode to Differential Output Return Loss (Notes 4,   | RL TX-CM- DM     | f = 150MHz to 300MHz                           | f = 150MHz to 300MHz                           |    30 |       |       | dB      |
| Common-Mode to Differential Output Return Loss (Notes 4,   | RL TX-CM- DM     | f = 300MHz to 600MHz                           | f = 300MHz to 600MHz                           |    30 |       |       | dB      |
| Common-Mode to Differential Output Return Loss (Notes 4,   | RL TX-CM- DM     | f = 600MHz to 1200MHz                          | f = 600MHz to 1200MHz                          |    20 |       |       | dB      |
| 5)                                                         | RL TX-CM- DM     | f = 1.2GHz to 2.4GHz                           | f = 1.2GHz to 2.4GHz                           |    10 |       |       | dB      |
| Common-Mode to Differential Output Return Loss (Notes 4,   | RL TX-CM- DM     | f = 2.4GHz to 3.0GHz                           | f = 2.4GHz to 3.0GHz                           |     4 |       |       | dB      |
| Common-Mode to Differential Output Return Loss (Notes 4,   | RL TX-CM- DM     | f = 3.0GHz to 5.0GHz                           | f = 3.0GHz to 5.0GHz                           |     4 |       |       | dB      |
| Differential Input Signal Range                            | V RX-DFF-PP      | SATA I, SATA II (Note 4)                       | SATA I, SATA II (Note 4)                       |   225 |       |  1600 | mVP-P   |
| Differential Output Swing                                  | V TX-DFF-PP      | f = 750MHz (Note 4)                            | PA = PB = GND                                  |   425 |   525 |   625 | mVP-P   |
| Output Preemphasis                                         | TX-DFF-PP- PE DB | f = 750MHz                                     | PA = PB = VCC                                  |       |   2.8 |       | dB      |
| Input Equalization                                         |                  | V RX-DFF-PP = 300mVP-P , t IN,RISE/FALL = 20ps | V RX-DFF-PP = 300mVP-P , t IN,RISE/FALL = 20ps |       |   2.7 |       | dB      |
| Preemphasis Time Period                                    | t PE             | f = 750MHz                                     | PA = PB = VCC                                  |       |   150 |       | ps      |
| Propagation Delay                                          | t PD             |                                                |                                                |       |   150 |       | ps      |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    3

## SATA I/II/III Bidirectional Redriver with Input Equalization and Preemphasis

## ELECTRICAL CHARACTERISTICS (continued)

(VCC = +3.0V to +3.6V, CL = 12nF, RL = 50 I , TA = 0 N C to +70 N C, unless otherwise noted. Typical values are at VCC = +3.3V, TA = +25 N C.) (Note 3)

| PARAMETER                          | SYMBOL      | CONDITIONS                                              |   MIN | TYP   |   MAX | UNITS   |
|------------------------------------|-------------|---------------------------------------------------------|-------|-------|-------|---------|
| Output Rise/Fall Time (Notes 5, 6) | t R , t F   | PA = PB = GND SATA I/II (Note 7)                        |    67 |       |   130 | ps      |
| Output Rise/Fall Time (Notes 5, 6) | t R , t F   | PA = PB = GND SATA III (Note 8)                         |    40 |       |    68 | ps      |
| Deterministic Jitter (Notes 5, 9)  | t TX-DJ-DD  | PA = PB = GND                                           |       |       |    20 | ps P-P  |
| Random Jitter (Notes 5, 9)         | t TX-RJ-DD  | PA = PB = GND                                           |       |       |   1.5 | psRMS   |
| OOB Detector Threshold             |             | SATA OOB pattern, f = 750MHz                            |    50 |       |   150 | mVP-P   |
| OOB Output Startup/Shutdown Time   |             | (Note 10)                                               |       | 4     |     8 | ns      |
| OOB Differential-Offset Delta      | r V OOB,DFF | Difference between OOB and active-mode output offset    |  -120 |       |   120 | mV      |
| OOB Common-Mode Delta              | r V OOB,CM  | Difference between OOB and active com- mon-mode voltage |   -15 |       |   +15 | mV      |
| OOB Output Disable                 | V OOB,OUT   | V IN < 50mVP-P , output voltage in squelch              |       |       |    30 | mVP-P   |
| LOGIC INPUT                        |             |                                                         |       |       |       |         |
| Input Logic-High                   | V IH        |                                                         |   1.4 |       |       | V       |
| Input Logic-Low                    | V IL        |                                                         |       |       |   0.6 | V       |
| Input Logic Hysteresis             | V HYST      |                                                         |       | 0.1   |       | V       |
| Input Pullup Resistance            | RPU         | Pin : CAD                                               |   200 | 330   |       | k I     |
| Input Pulldown Resistance          | RPD         | Pins: EN, PA, PB                                        |   200 | 330   |       | k I     |
| ESD PROTECTION                     |             |                                                         |       |       |       |         |
| All Pins                           |             | HBM                                                     |       | Q 8   |       | kV      |

Note 3: All devices are 100% production tested at TA = +70°C. All temperature limits are guaranteed by design.

Note 4: This specification meets SATA v.2.6, gold standard.

Note 5: Guaranteed by design.

Note 6: Rise and fall times are measured using 20% and 80% levels.

Note 7: For SATA 2.0, refer to SATA 2.6-Gold Specification , page 111, Figure 191.

Note 8: For SATA 3.0, refer to SATA Revision 3.0 Release Candidate , page 222, Figure 124.

Note 9: DJ measured using a K28.5 pattern; RJ measured using a D10.2 pattern.

Note 10: Total time for OOB detection circuit to enable/squelch the output.

4      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## SATA I/II/III Bidirectional Redriver with Input Equalization and Preemphasis

Typical Operating Characteristics

<!-- image -->

## SATA I/II/III Bidirectional Redriver with Input Equalization and Preemphasis

Typical Operating Characteristics (continued)

(TA  = +25°C, unless otherwise noted.)

6      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## SATA I/II/III Bidirectional Redriver with Input Equalization and Preemphasis

Typical Operating Characteristics (continued)

(TA  = +25°C, unless otherwise noted.)

<!-- image -->

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    7

## SATA I/II/III Bidirectional Redriver with Input Equalization and Preemphasis

## Pin Configuration

<!-- image -->

## Pin Description

| PIN           | NAME   | FUNCTION                                                                                                                                                                                          |
|---------------|--------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1             | AINP   | Noninverting Input from Host Channel A                                                                                                                                                            |
| 2             | AINM   | Inverting Input from Host Channel A                                                                                                                                                               |
| 3, 13, 17, 19 | GND    | Ground                                                                                                                                                                                            |
| 4             | BOUTM  | Inverting Output to Host Channel B                                                                                                                                                                |
| 5             | BOUTP  | Noninverting Output to Host Channel B                                                                                                                                                             |
| 6, 10, 16, 20 | VCC    | Positive Supply Voltage Input. Bypass VCC to GND with 1 F F and 0.01 F F capacitors in parallel as close to the device as possible.                                                               |
| 7             | EN     | Active-High Enable Input. Drive EN low to put the device in standby mode. Drive EN high for nor- mal operation. EN is internally pulled down with a 330k W (typ) resistor.                        |
| 8             | PB     | Channel B Preemphasis Enable Input. Drive PB high to enable channel B output preemphasis. Drive PB low for standard SATA output level. PB is internally pulled down with a 330k W (typ) resistor. |
| 9             | PA     | Channel A Preemphasis Enable Input. Drive PA high to enable channel A output preemphasis. Drive PA low for standard SATA output level. PA is internally pulled down with a 330k W (typ) resistor. |
| 11            | BINP   | Noninverting Input from Device Channel B                                                                                                                                                          |
| 12            | BINM   | Inverting Input from Device Channel B                                                                                                                                                             |
| 14            | AOUTM  | Inverting Output to Device Channel A                                                                                                                                                              |
| 15            | AOUTP  | Noninverting Output to Device Channel A                                                                                                                                                           |
| 18            | CAD    | Active-Low Cable-Detect Input. Drive CAD high to put the device in standby mode. Drive CAD low for normal operation. CAD is internally pulled up with a 330k I (typ) resistor.                    |
| -             | EP     | Exposed Pad. Internally connected to GND. EP must be electrically connected to a ground plane for proper thermal and electrical operation.                                                        |

8      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## SATA I/II/III Bidirectional Redriver with Input Equalization and Preemphasis

## Functional Diagram/Truth Table

<!-- image -->

|   EN |   CAD | STATUS            |
|------|-------|-------------------|
|    0 |     0 | Low-Power Standby |
|    0 |     1 | Low-Power Standby |
|    1 |     0 | Active            |
|    1 |     1 | Low-Power Standby |

|   EN | PA   | PB   | CHANNEL A     | CHANNEL B     |
|------|------|------|---------------|---------------|
|    0 | X    | X    | Standby       | Standby       |
|    1 | 0    | 0    | Standard SATA | Standard SATA |
|    1 | 1    | 0    | Preemphasis   | Standard SATA |
|    1 | 0    | 1    | Standard SATA | Preemphasis   |
|    1 | 1    | 1    | Preemphasis   | Preemphasis   |

Note: PA, PB, EN are internally pulled down to GND by 330k W resistors. CAD is internally pulled up to VCC by a 330k W resistor.

X = Don't care.

## Detailed Description

The  MAX4951BE  consists  of  two  identical  buffers  that take  SATA  input  signals  and  return  them  to  full  output levels while withstanding high ESD Q 8kV (HBM) protection. This device meets SATA I/II specifications and can meet SATA III specifications.

<!-- image -->

## Input/Output Terminations

Inputs and outputs are internally 50 I terminated to VCC (see  the Functional  Diagram/Truth  Table )  and  must  be AC-coupled to the SATA controller IC and SATA device for proper operation.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    9

## SATA I/II/III Bidirectional Redriver with Input Equalization and Preemphasis

## OOB Signal Detection

The  MAX4951BE  provides  full  OOB  signal  support through  high-speed,  OOB-detection  circuitry.  SATA OOB  differential  input  signals  of  50mVP-P  or  less  are detected as OFF and are not passed to the output. This prevents the system from responding to unwanted noise. SATA OOB differential input signals of 150mVP-P or more are detected as on and passed to the output. This allows OOB signals to transmit  through  the  MAX4951BE.  The time for the OOB-detection circuit to detect an inactive SATA  OOB  input  and  squelch  the  associated  output, or to detect an active SATA OOB input and enable the output, is less than 4ns (typ).

## Enable Input

The  MAX4951BE  features  an  active-high  enable  input (EN).  EN  has  an  internal  pulldown  resistor  of  330k I (typ).  When  EN  is  driven  low  or  left  unconnected,  the MAX4951BE  enters  low-power  standby  mode  and  the buffers  are  disabled,  reducing  the  supply  current  to 500 F A (typ). Drive EN high for normal operation.

## Cable-Detect Input

The  MAX4951BE  features  an  active-low,  cable-detect input  ( CAD ). CAD has  an  internal  pullup  resistor  of 330k I (typ).  When CAD is  driven  high  or  left  unconnected,  the  MAX4951BE  enters  low-power  standby mode  and  the  buffers  are  disabled,  reducing  supply current to 500 F A (typ). This signal is normally driven low by inserting an eSATA cable into a properly wired socket (see Figure 3). If the cable-detect feature is not desired, simply ground this pin.

## Dynamic Power-Down Mode

The MAX4951BE features a dynamic power-down mode where the device shuts down the major power consump- tion circuitry. The MAX4951BE detects whether the input signal  does  not  exist  for  a  4 F s  (typ)  duration.  Normal power  and  normal  operation  resume  when  a  signal above the OOB-threshold level is detected at the input. This function is implemented separately for both channels.

Figure 1. Human Body ESD Test Model

<!-- image -->

## Output Preemphasis Selection Inputs

The  MAX4951BE  has  two  preemphasis-control  logic inputs,  PA  and  PB.  PA  and  PB  have  internal  pulldown resistors of 330k I (typ). PA and PB enable preemphasis to  the  outputs  of  their  corresponding  buffers  (see  the Functional  Diagram/Truth  Table ).  Drive  PA  or  PB  low or leave unconnected for standard SATA output levels. Drive PA or PB high to provide preemphasis to the output.  The  preemphasis  output  signal  compensates  for attenuation from longer trace lengths or to meet eSATA specifications.

## ESD Protection

As with all Maxim devices, ESD protection structures are incorporated on all pins to protect against electrostatic discharges encountered during handling and assembly. The MAX4951BE is protected against ESD Q 8kV (HBM). The  ESD  struc  tures  withstand Q 8kV  in  normal  operation and powered down states. After an ESD event, the MAX4951BE continues to function without latchup.

## HBM

The  MAX4951BE  is  characterized  for Q 8kV  ESD  protection  using  the  HBM  (MIL-STD-883,  Method  3015). Figure  1  shows  the  HBM  and  Figure  2  shows  the  current  waveform  it  generates  when  discharged  into  a low-impedance  state.  This  model  con  sists  of  a  100pF capacitor charged to the ESD voltage of interest that is then discharged into the device through a 1.5k I resistor.

Figure 2. Human Body Current Waveform

<!-- image -->

10      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## SATA I/II/III Bidirectional Redriver with Input Equalization and Preemphasis

## Applications Information

Figure 3 shows a typical application with the MAX4951BE used to drive an eSATA output. The diagram assumes that the MAX4951BE is close to the SATA host controller. PB is set low to drive standard SATA levels to the host, and PA is set high to drive eSATA levels to the device. If  the  MAX4951BE is further from the controller, set PB high to compensate for attenuation. The MAX4951BE is backward-pin-compatible with MAX4951 (see Figure 4).

## Exposed-Pad Package

The  exposed-pad,  20-pin  TQFN  package  incorporates features that provide a very low thermal resistance path for  heat  removal from the IC. The exposed pad on the MAX4951BE must be soldered to GND for proper thermal and electrical performance. For more information on exposed-pad packages, refer to Application Note  862: HFAN-08.1: Thermal Considerations of QFN and Other Exposed-Paddle Packages .

## Layout

Use controlled-impedance transmission lines to interface with  the  MAX4951BE  high-speed  inputs  and  outputs. Place power-supply decoupling capacitors as close as possible to VCC pin.

## Power-Supply Sequencing

Caution: Do not exceed the absolute maximum ratings because stresses beyond the listed ratings can cause permanent damage to the device.

Proper  power-supply  sequencing  is  recommended  for all devices. Always apply VCC before applying signals, especially if the signal is not current limited.

<!-- image -->

Figure 3. Typical Application Circuit for MAX4951BE Driving an eSATA Output

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    11

## SATA I/II/III Bidirectional Redriver with Input Equalization and Preemphasis

Figure 4. Typical Application Circuit for Backward Pin Compatibility with the MAX4951

<!-- image -->

## Chip Information

PROCESS: BiCMOS

## Package Information

For  the  latest  package  outline  information  and  land  patterns, go to www.maxim-ic.com/packages .  Note  that  a  '+',  '#',  or '-' in the package code indicates RoHS status only. Package drawings may show a different suffix character, but the drawing pertains to the package regardless of RoHS status.

| PACKAGE TYPE   | PACKAGE CODE   | OUTLINE NO.   | LAND PATTERN NO.   |
|----------------|----------------|---------------|--------------------|
| 20 TQFN-EP     | T2044+2        | 21-0139       | 90-0036            |

12      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## SATA I/II/III Bidirectional Redriver with Input Equalization and Preemphasis

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                                                 | PAGES CHANGED   |
|-------------------|-----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 10/09           | Initial release                                                                                                                                             | -               |
|                 1 | 11/10           | Deleted the 'Meets SATA I, II Input/Output-Return Loss Mask' feature from the Features section, deleted the 'Top Mark' column from the Ordering Information | 1               |