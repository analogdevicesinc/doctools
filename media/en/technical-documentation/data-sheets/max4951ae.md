<!-- lastmod 2022-08-04 -->
<!-- image -->

## SATA I/II Bidirectional Redriver with High ESD and Cable Detect

## General Description

The  MAX4951AE  dual-channel  buffer  is  designed  to redrive  serial-ATA  (SATA)  I  and  SATA  II  signals  and can survive ESD events up to Q 8kV Human Body Model (HBM). The MAX4951AE can be placed near an eSATA connector  to  overcome  board  losses  and  produce  an eSATA-compliant signal level. This device is Serial ATA Revision 2.6 (gold standard)-compliant, while overcoming losses in the PCB and eSATA connector.

The MAX4951AE features low standby current for powersensitive  applications.  This  device  features  hardware SATA-drive  cable  detection,  keeping  the  power  low  in standby mode.

The MAX4951AE preserves signal integrity at the receiver by reestablishing full output levels. It reduces the total system jitter (TJ) by squaring up the signal and providing excellent  return  loss  match  to  the  source.  This  device to  drive  SATA  outputs  over  normal  trace  lengths  and eSATA connector.  SATA  Out-Of-Band  (OOB)  signaling is  supported  using  high-speed  amplitude  detection  on the inputs, and squelch on the corresponding outputs. Inputs and outputs are all internally 50 I terminated.

The  MAX4951AE  operates  from  a  single  +3.3V  (typ) supply and is available in a small, 4mm x 4mm, TQFN package  with  flow-through  traces  for  ease  of  layout. This device is specified over the 0 N C to +70 N C operating temperature range.

## Applications

Laptop Computers

Docking Stations

Desktop Computers

Servers

Data Storage/Work Stations

## Features

- S Single +3.3V (typ) Supply Operation
- S Low-Power, 350µA (typ) eSATA Cable Detect
- S Supports SATA 1.5Gbps and 3.0Gbps Data Rates
- S Meets SATA I, SATA II Input/Output-Return Loss Mask
- S Exceeds eSATA Standard Compliant Eye Mask for Jitter
- S Meets or Exceeds eSATA Standard Compliant Eye Mask for Output Levels
- S Supports SATA OOB Signaling
- S Internal Input/Output 50 I Termination Resistors
- S Inline Signal Traces for Flow-Through Layout
- S Pin Compatible with MAX4951
- S Space-Saving, 4mm x 4mm, TQFN Package
- S ESD Protection on All Pins: ±8kV (HBM)

## Ordering Information

| PART          | TEMP RANGE       | PIN-PACKAGE   |
|---------------|------------------|---------------|
| MAX4951AECTP+ | 0 N C to +70 N C | 20 TQFN-EP *  |

+ Denotes a lead(Pb)-free/RoHS-compliant package. * EP = Exposed pad.

## Pin Configuration

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## SATA I/II Bidirectional Redriver with High ESD and Cable Detect

## ABSOLUTE MAXIMUM RATINGS

| (Voltages Referenced to GND.)                                                                    |              |
|--------------------------------------------------------------------------------------------------|--------------|
| VCC ...................................................................... -0.3V to              | +4.0V        |
| HAP, HAM, DBP, DBM, EN, CAD , BA, BB (Note 1) ......................... -0.3V to                 | (VCC + 0.3V) |
| Short-Circuit Output Current (HBP, HBM, DAP, DAM).............................................   | Q 30mA       |
| Continuous Current at Inputs (HAP, HAM, DBP, DBM)............................................... | Q 5mA        |
| Continuous Current (EN, CAD , BA, BB)........................................................    | Q 5mA        |

Note 1: All I/O pins are clamped by internal diodes.

Note 2: Package thermal resistances were obtained using the method described in JEDEC specification JESD51-7, using a fourlayer board. For detailed information on package thermal considerations, refer to www.maxim-ic.com/thermal-tutorial .

Stresses beyond those listed under 'Absolute Maximum Ratings' may cause permanent damage to the device. These are stress ratings only, and functional operation of the device at these or any other conditions beyond those indicated in the operational sections of the specifications is not implied. Exposure to absolute maximum rating conditions for extended periods may affect device reliability.

## ELECTRICAL CHARACTERISTICS

(VCC = +3.0V to +3.6V, CL = 10nF, RL = 50 I ,  TA  =  0 N C to +70 N C, unless otherwise noted. Typical values are at VCC = +3.3V, TA = +25 N C.) (Note 3)

| PARAMETER                                | SYMBOL         | CONDITIONS            | MIN            | TYP            | MAX            | UNITS          |
|------------------------------------------|----------------|-----------------------|----------------|----------------|----------------|----------------|
| Operating Power-Supply Range             | VCC            |                       | 3.0            |                | 3.6            | V              |
| Operating Supply Current                 | ICC            | BA = BB = VCC         |                | 75             | 100            | mA             |
| Operating Supply Current                 | ICC            | BA = BB = GND         |                | 70             | 90             | mA             |
| Power-Down Supply Current                | IPWDN          | EN = GND or CAD = VCC |                | 0.35           | 2              | mA             |
| Differential Input Resistance            | Z RX-DIFF-DC   |                       | 85             | 100            | 115            | I              |
| Differential Output Resistance           | Z TX-DIFF-DC   |                       | 85             | 100            | 115            | I              |
| AC PERFORMANCE                           | AC PERFORMANCE | AC PERFORMANCE        | AC PERFORMANCE | AC PERFORMANCE | AC PERFORMANCE | AC PERFORMANCE |
| Differential Input Return Loss (Note 4)  | RL RX-DIFF     | f = 150MHz to 300MHz  |                |                | -18            | dB             |
| Differential Input Return Loss (Note 4)  | RL RX-DIFF     | f = 300MHz to 600MHz  |                |                | -14            | dB             |
| Differential Input Return Loss (Note 4)  | RL RX-DIFF     | f = 600MHz to 1200MHz |                |                | -10            | dB             |
| Differential Input Return Loss (Note 4)  | RL RX-DIFF     | f = 1.2GHz to 2.4GHz  |                |                | -8             | dB             |
| Differential Input Return Loss (Note 4)  | RL RX-DIFF     | f = 2.4GHz to 3.0GHz  |                |                | -3             | dB             |
| Common-Mode Input Return Loss (Note 4)   | RL RX-CM       | f = 150MHz to 300MHz  |                |                | -5             | dB             |
| Common-Mode Input Return Loss (Note 4)   | RL RX-CM       | f = 300MHz to 600MHz  |                |                | -5             | dB             |
| Common-Mode Input Return Loss (Note 4)   | RL RX-CM       | f = 600MHz to 1200MHz |                |                | -2             | dB             |
| Common-Mode Input Return Loss (Note 4)   | RL RX-CM       | f = 1.2GHz to 2.4GHz  |                |                | -2             | dB             |
| Common-Mode Input Return Loss (Note 4)   | RL RX-CM       | f = 2.4GHz to 3.0GHz  |                |                | -2             | dB             |
| Differential Output Return Loss (Note 4) | RL TX-DIFF     | f = 150MHz to 300MHz  |                |                | -14            | dB             |
| Differential Output Return Loss (Note 4) | RL TX-DIFF     | f = 300MHz to 600MHz  |                |                | -8             | dB             |
| Differential Output Return Loss (Note 4) | RL TX-DIFF     | f = 600MHz to 1200MHz |                |                | -6             | dB             |
| Differential Output Return Loss (Note 4) | RL TX-DIFF     | f = 1.2GHz to 2.4GHz  |                |                | -6             | dB             |
| Differential Output Return Loss (Note 4) | RL TX-DIFF     | f = 2.4GHz to 3.0GHz  |                |                | -3             | dB             |

<!-- image -->

| Continuous Power Dissipation (T A = +70 N C)                                                                                           |
|----------------------------------------------------------------------------------------------------------------------------------------|
| 20-Pin TQFN (derate 25.6mW/ N C above +70 N C) ..... 2051mW Junction-to-Case Thermal Resistance ( B JC ) (Note 2)                      |
| 20-Pin TQFN ................................................................ 6 N C/W                                                   |
| Junction-to-Ambient Thermal Resistance ( B JA ) (Note 2) 20-Pin TQFN .............................................................. 39 |
| N C/W                                                                                                                                  |
| Operating Temperature Range ........................... 0 N C to +70 N C                                                               |
| Storage Temperature Range ......................... -55 N C to +150 N C                                                                |
| Lead Temperature (soldering, 10s) ...............................+300 N C                                                              |

## SATA I/II Bidirectional Redriver with High ESD and Cable Detect

## ELECTRICAL CHARACTERISTICS (continued)

(VCC = +3.0V to +3.6V, CL = 10nF, RL = 50 I ,  TA  =  0 N C to +70 N C, unless otherwise noted. Typical values are at VCC = +3.3V, TA = +25 N C.) (Note 3)

| PARAMETER                        | SYMBOL                           | CONDITIONS                       |                                  | MIN                              | TYP                              | MAX                              | UNITS                            |
|----------------------------------|----------------------------------|----------------------------------|----------------------------------|----------------------------------|----------------------------------|----------------------------------|----------------------------------|
| Common-Mode Return Loss (Note 4) |                                  | f = 150MHz to 300MHz             | f = 150MHz to 300MHz             |                                  |                                  | -8                               | dB                               |
|                                  |                                  | f = 300MHz to 600MHz             | f = 300MHz to 600MHz             |                                  |                                  | -5                               | dB                               |
|                                  | RL TX-CM                         | f = 600MHz to 1200MHz            | f = 600MHz to 1200MHz            |                                  |                                  | -2                               | dB                               |
|                                  |                                  | f = 1.2GHz to 2.4GHz             | f = 1.2GHz to 2.4GHz             |                                  |                                  | -2                               | dB                               |
|                                  |                                  | f = 2.4GHz to 3.0GHz             | f = 2.4GHz to 3.0GHz             |                                  |                                  | -2                               | dB                               |
| Differential Input Signal Range  | V RX-DFF-PP                      | SATA 1.5Gbps/3.0Gbps             | SATA 1.5Gbps/3.0Gbps             | 220                              |                                  | 1600                             | mVP-P                            |
| Differential Output Swing        | V TX-DFF-PP                      |                                  | BA = BB = GND                    | 425                              | 525                              | 625                              | mVP-P                            |
| Differential Output Swing        | V TX-DFF-PP                      |                                  | BA = BB = VCC                    | 525                              | 625                              | 725                              | mVP-P                            |
| Differential Output Swing        | V TX-DFF-PP                      | f = 1.5GHz                       | BA = BB = GND                    | 400                              | 500                              | 600                              | mVP-P                            |
| Differential Output Swing        | V TX-DFF-PP                      | f = 1.5GHz                       | BA = BB = VCC                    | 500                              | 600                              | 700                              | mVP-P                            |
| Propagation Delay                | t PD                             |                                  |                                  |                                  | 240                              |                                  | ps                               |
| Output Rise/Fall Time            | t R/F                            | Figure 1, (Notes 4, 5)           | Figure 1, (Notes 4, 5)           | 67                               |                                  | 136                              | ps                               |
| Deterministic Jitter             | T TX-DJ-DD                       | Up to 3.0Gbps (Notes 4, 6)       | Up to 3.0Gbps (Notes 4, 6)       |                                  |                                  | 15                               | ps P-P                           |
| Random Jitter                    | T TX-RJ-DD                       | Up to 3.0Gbps (Notes 4, 6)       | Up to 3.0Gbps (Notes 4, 6)       |                                  |                                  | 1.8                              | psRMS                            |
| OOB Detector Threshold           | V TH-OOB                         | SATA OOB pattern                 | SATA OOB pattern                 | 50                               |                                  | 200                              | mVP-P                            |
| OOB Output Startup/Shutdown Time | tOOB                             | (Note 7)                         | (Note 7)                         |                                  | 3                                | 5                                | ns                               |
| CONTROL LOGIC (BA, BB, EN, CAD ) | CONTROL LOGIC (BA, BB, EN, CAD ) | CONTROL LOGIC (BA, BB, EN, CAD ) | CONTROL LOGIC (BA, BB, EN, CAD ) | CONTROL LOGIC (BA, BB, EN, CAD ) | CONTROL LOGIC (BA, BB, EN, CAD ) | CONTROL LOGIC (BA, BB, EN, CAD ) | CONTROL LOGIC (BA, BB, EN, CAD ) |
| Input Logic High                 | V IH                             |                                  |                                  | 1.4                              |                                  |                                  | V                                |
| Input Logic Low                  | V IL                             |                                  |                                  |                                  |                                  | 0.6                              | V                                |
| Input Logic Hysteresis           | V HYST                           |                                  |                                  |                                  | 0.1                              |                                  | V                                |
| Pullup/Pulldown Input Resistor   | RUP/DOWN                         |                                  |                                  |                                  | 330                              |                                  | k I                              |
| ESD PROTECTION                   | ESD PROTECTION                   | ESD PROTECTION                   | ESD PROTECTION                   | ESD PROTECTION                   | ESD PROTECTION                   | ESD PROTECTION                   | ESD PROTECTION                   |
| All Pins                         |                                  | Human Body Model                 | Human Body Model                 | Q 8                              |                                  |                                  | kV                               |

Note 3: All devices are 100% production tested at TA = +25 N C. All temperature limits are guaranteed by design.

Note 4: Guaranteed by design.

Note 5: Rise and fall times are measured using 20% and 80% levels.

Note 6: DJ measured using K28.5 pattern; RJ measured using D10.2 pattern

Note 7: Total time for OOB detection circuit to enable/squelch the output.

<!-- image -->

## SATA I/II Bidirectional Redriver with High ESD and Cable Detect

Typical Operating Characteristics

(VCC = +3.3V, TA = +25 N C, all eye diagrams measured using K28.5 pattern.)

<!-- image -->

<!-- image -->

## SATA I/II Bidirectional Redriver with High ESD and Cable Detect

Typical Operating Characteristics (continued)

(VCC = +3.3V, TA = +25 N C, all eye diagrams measured using K28.5 pattern.)

<!-- image -->

Figure 1. Circuit for Measuring tR/F for MAX4951AE (See SATA Specifications for Compliance Measurement)

<!-- image -->

## SATA I/II Bidirectional Redriver with High ESD and Cable Detect

## Pin Description

| PIN           | NAME   | FUNCTION                                                                                                                                                                              |
|---------------|--------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1             | HAP    | Noninverting Input from Host Channel A                                                                                                                                                |
| 2             | HAM    | Inverting Input from Host Channel A                                                                                                                                                   |
| 3, 13, 17, 19 | GND    | Ground                                                                                                                                                                                |
| 4             | HBM    | Inverting Output to Host Channel B                                                                                                                                                    |
| 5             | HBP    | Noninverting Output to Host Channel B                                                                                                                                                 |
| 6, 10, 16, 20 | VCC    | Positive Supply Voltage Input. Bypass VCC to GND with 0.1 F F and 0.001 F F capacitors in parallel and as close as possible to the device.                                            |
| 7             | EN     | Active-High Enable Input. Drive EN low to put device in standby mode. Drive EN high for normal operation. EN is internally pulled down with a 330k I (typ) resistor.                  |
| 8             | BB     | Channel-B Boost Enable Input. Drive BB high to enable channel-B output boost. Drive BB low for standard SATA output level. BB is internally pulled down with a 330k I (typ) resistor. |
| 9             | BA     | Channel-A Boost Enable Input. Drive BA high to enable channel-A output boost. Drive BA low for standard SATA output level. BA is internally pulled down with a 330k I (typ) resistor. |
| 11            | DBP    | Noninverting Input from Device Channel B                                                                                                                                              |
| 12            | DBM    | Inverting Input from Device Channel B                                                                                                                                                 |
| 14            | DAM    | Inverting Output to Device Channel A                                                                                                                                                  |
| 15            | DAP    | Noninverting Output to Device Channel A                                                                                                                                               |
| 18            | CAD    | Active-Low Cable-Detect Input. Drive CAD high to put device in standby mode. Drive CAD low for normal operation. CAD is internally pulled up with a 330k I (typ) resistor.            |
| -             | EP     | Exposed Pad. Internally connected to GND. EP must be electrically connected to a ground plane for proper thermal and electrical operation.                                            |

## SATA I/II Bidirectional Redriver with High ESD and Cable Detect

## Functional Diagram/Truth Table

<!-- image -->

|   EN |   CAD | STATUS            |
|------|-------|-------------------|
|    0 |     0 | Low-Power Standby |
|    0 |     1 | Low-Power Standby |
|    1 |     0 | Active            |
|    1 |     1 | Low-Power Standby |

|   BB |   BA | OUTPUT LEVELS                  |
|------|------|--------------------------------|
|    0 |    0 | A and B are Standard Levels    |
|    0 |    1 | A is Boosted and B is Standard |
|    1 |    0 | A is Standard and B is Boosted |
|    1 |    1 | A and B are Boosted            |

Note: BA, BB, and EN are internally pulled down to GND by 330k I resistors. CAD is internally pulled up to VCC by a 330k I resistor.

<!-- image -->

## SATA I/II Bidirectional Redriver with High ESD and Cable Detect

## Detailed Description

The  MAX4951AE  consists  of  two  identical  buffers  that take  SATA  input  signals  and  return  them  to  full  output levels while withstanding ESD events up to Q 8kV (HBM). This device functions for SATA I/SATA II applications

## Input/Output Terminations

Inputs and outputs are internally 50 I terminated to VCC (see  the Functional  Diagram/Truth  Table )  and  must  be AC-coupled to the SATA controller IC and SATA device for proper operation.

## OOB Logic

The  MAX4951AE  provides  full  OOB  signal  support through high-speed amplitude detection circuitry. SATA OOB  differential  input  signals  of  50mVP-P  or  less  are detected as off and not passed to the output. This prevents  the  system  from  responding  to  unwanted  noise. SATA  OOB  differential  input  signals  of  200mVP-P  or more are detected as on and passed to the output. This allows OOB signals to transmit through the MAX4951AE. The time for the amplitude detection circuit to detect an inactive  SATA  OOB  input  and  squelch  the  associated output, or detect an active SATA OOB input and enable the output, is less than 5ns (max).

## Enable Input

The  MAX4951AE  features  an  active-high  enable  input (EN).  EN  has  an  internal  pulldown  resistor  of  330k I (typ).  When  EN  is  driven  low  or  left  unconnected,  the MAX4951AE  enters  low-power  standby  mode  and  the buffers are disabled, reducing supply current to 350 F A (typ). Drive EN high for normal operation.

## Cable-Detect Input

The  MAX4951AE  features  an  active-low  cable-detect input  ( CAD ). CAD has  an  internal  pullup  resistor  of

Figure 2. Human Body ESD Test Model

<!-- image -->

330k I (typ).  When CAD is  driven  high  or  left  unconnected,  the  MAX4951AE  enters  low-power  standby mode  and  the  buffers  are  disabled,  reducing  supply current to 350 F A (typ). This signal is normally driven low by inserting an eSATA cable into a properly wired socket (see Figure 4). If the cable-detect feature is not desired, simply ground this pin.

## Output Boost Selection Inputs

The MAX4951AE has two digital control logic inputs, BA and BB. BA and BB have internal pulldown resistors of 330k I (typ). BA and BB control the boost level of their corresponding  buffers  (see  the Functional  Diagram/ Truth Table ). Drive BA or BB low or leave unconnected for standard SATA output levels. Drive BA or BB high to boost the output. The boosted output level compensates for attenuation from longer trace-length cables or to meet eSATA specifications.

## ESD Protection

As with all Maxim devices, ESD-protection structures are incorporated on all pins to protect against electrostatic discharges encountered during handling and assembly. The MAX4951AE is protected against ESD up to Q 8kV (Human Body Model) without damage. The ESD structures withstand Q 8kV in all states: normal operation and powered  down.  After  an  ESD  event,  the  MAX4951AE continues to function without latchup.

## Human Body Model

The  MAX4951AE  is  characterized  for Q 8kV  ESD  protection  using  the  Human  Body  Model  (MIL-STD-883, Method 3015). Figure 2 shows the Human Body Model and Figure 3 shows the current waveform it generates when discharged into a low impedance. This model consists of a 100pF capacitor charged to the ESD voltage of interest that is then discharged into the device through a 1.5k I resistor.

<!-- image -->

Figure 3. Human Body Current Waveform

<!-- image -->

## SATA I/II Bidirectional Redriver with High ESD and Cable Detect

## Applications Information

Figure  4  shows  a  typical  application  circuit  with  the MAX4951AE used to  drive  an  eSATA  output.  The  diagram assumes that the MAX4951AE is close to the SATA host controller. In this application, BB is set low to drive standard  SATA  levels  to  the  host,  and  BA  is  set  high to  overcome  board/connector  losses,  matching  eSATA levels at the connector. If the MAX4951AE is further from the controller, set BB high to compensate for the added attenuation.  The  MAX4951AE  is  backward-compatible with the MAX4951 (see Figure 5).

## Exposed-Pad Package

The exposed-pad, 20-pin, TQFN package incorporates features that provide a very low thermal resistance path for  heat  removal from the IC. The exposed pad on the MAX4951AE must be soldered to GND for proper ther- mal and electrical performance. For more information on exposed-pad packages, refer to Maxim Application Note 862: HFAN-08.1:  Thermal  Considerations  of  QFN  and Other Exposed-Paddle Packages .

## Layout

Use controlled-impedance transmission lines to interface with  the  MAX4951AE  high-speed  inputs  and  outputs. Place power-supply decoupling capacitors as close as possible to the VCC pin.

## Power Supply Sequencing

Caution: Do not exceed the absolute maximum ratings because stresses beyond the listed ratings can cause permanent damage to the device.

Proper  power-supply  sequencing  is  recommended  for all devices. Always apply VCC before applying signals, especially if the signal is not current limited.

<!-- image -->

Figure 4. Typical Application Circuit

<!-- image -->

## SATA I/II Bidirectional Redriver with High ESD and Cable Detect

Figure 5. MAX4951 Backward-Compatible Mode

<!-- image -->

## Chip Information

PROCESS: BiCMOS

## Package Information

For the latest package outline information and land patterns, go to www.maxim-ic.com/packages .

| PACKAGE TYPE   | PACKAGE CODE   | DOCUMENT NO.   |
|----------------|----------------|----------------|
| 20 TQFN-EP     | T2044+2        | 21-0139        |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

10