<!-- lastmod 2022-08-03 -->
<!-- image -->

## General Description

The MAX14950 evaluation kit (EV kit) provides a proven design  to  evaluate  the  MAX14950  quad  PCI  Express M (PCIe)  equalizer/redriver.  The  device  includes  a  fourlevel programmable input equalization and an eight-level programmable output deemphasis/preemphasis.

The EV kit PCB comes with a MAX14950CTO+ installed, which is available in a lead(Pb)-free (3.5mm x 9.0mm), 42-pin TQFN package with an exposed pad.

## MAX14950 Evaluation Kit

## Evaluates: MAX14950

## Features

- S Eye Diagram Test Circuit with SMA Input/Output
- S Calibration Traces Provided
- S Proven PCB Layout
- S Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                             |
|---------------|-------|-------------------------------------------------------------------------|
| C1-C24        |    24 | 0.22 F F Q 10%, 10V X5R ceramic capacitors (0402) Murata GRM155R61A224K |
| C25-C32       |     8 | 2.2 F F Q 10%, 10V X5R ceramic capacitors (0603) Murata GRM188R61A225K  |
| J1-J28        |    28 | Edge-mount SMA connectors                                               |
| J29           |     1 | Red multipurpose connector                                              |
| J30           |     1 | Black multipurpose connector                                            |

| DESIGNATION   |   QTY | DESCRIPTION                                                  |
|---------------|-------|--------------------------------------------------------------|
| JU1-JU8       |     8 | 2-pin headers                                                |
| R1-R8         |     8 | 1k I Q 5% resistors (0603)                                   |
| U1            |     1 | Quad PCIe equalizer/redriver (42 TQFN-EP) Maxim MAX14950CTO+ |
| -             |     8 | Shunts (JU1-JU8)                                             |
| -             |     1 | PCB: MAX14950 EVALUATION KIT+                                |

## Component Supplier

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |

Note: Indicate that you are using the MAX14950 when contacting this component supplier.

## Quick Start

## Required Equipment

- MAX14950	EV	kit
- 3.3V,	500mA	DC	power	supply
- Pulse	data	generator	with	a	minimum	frequency	of 8GHz (e.g., Agilent 81142A)
- Digital	serial	analyzer	(DSA)	sampling	oscilloscope with	a	minimum	frequency	of	12GHz	(e.g.,	Tektronix DSA8200)
- Two	 pairs	 of	 50 I SMA  cables,  length  matched pairwise

PCI Express is a registered trademark of PCI-SIG Corp.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## Procedure

The	EV	kit	is	fully	assembled	and	tested.	Follow	the	steps below	 to	 verify	 board	 operation	 and	 eye	 diagram/jitter measurements. Caution:  Do  not  turn  on  the  power until all connections are completed.

- 1) Verify	 that	 all	 jumpers	 are	 in	 their	 default	 positions (see Tables 1-4).
- 2) Connect	the	3.3V,	500mA	power	supply	to	the	VCC (J29)	and	GND	(J30)	connectors	on	the	EV	kit.
- 3) Place	 a	 shunt	 across	 pins	 1-2	 on	 jumper	 JU5	 to enable the device.
- 4) Set  up  the  data  generator  to  a  bit  rate  of  8Gbps, with  a  1VP-P  differential  voltage  and  a  desired pseudorandom	 binary	 sequence	 (PRBS)	 or	 any arbitrary	waveform.

- 5) Use the first pair of SMA cables to connect the differential output signals of the data generator to the IN1P (J3) and IN1N (J4) on the EV kit.
- 6) Use the second pair of SMA cables to connect the two sampling channels of the DSA to OUT1P (J11) and OUT1N (J12) on the EV kit.
- 7) Set  the  DSA  to  infinite  persistence  and  select  the math function of the signal (OUT1P - OUT1N).
- 8) Adjust  the  vertical  scale  to  100mV/div  and  the horizontal scale to 200ps/div on the DSA.
- 9) Turn on the DC power supply.
- 10)  Enable  the  data  outputs  on  the  data  generator and autoset the DSA to observe the waveform from the device.
- 11)  Save the waveform on the DSA.
- 12)  Disable the data outputs on the data generator.
- 13)  Turn off the DC power supply.
- 14)  Remove the first pair of SMA cables connected to J3 and J4 on the EV kit and connect them to J17 and J18 on the EV kit.
- 15)  Remove the second pair of SMA cables connected to J11 and J12 on the EV kit and connect them to J19 and J20 on the EV kit.
- 16)  Enable the data outputs on the data generator and autoset the DSA to observe the waveform from the calibration through traces.
- 17)  Compare the waveform to the waveform that includes the device and observe the jitter/eye height of both systems.  Take  the  difference  in  jitter/eye  height, which  is  the  extra  jitter/eye  height  coming  from the device.
- 18)  Change the input equalization-control settings and the  output  deemphasis-control  settings  for  further tests.

## Detailed Description of Hardware

The  MAX14950  EV  kit  provides  a  proven  design  to evaluate  the  MAX14950  quad  PCIe  equalizer/redriver.  The  device  includes  a  four-level  programmable input  equalization  and  an  eight-level  programmable output deemphasis/preemphasis.

All  signal  traces  coming  out  of  the  device  are  100 I differential controlled-impedance traces. Once the traces split into separate directions, the traces are 50 I singleended  controlled  impedances,  which  is  equivalent  to 100 I differentially.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX14950 Evaluation Kit

## Evaluates: MAX14950

## Calibration Traces

At the lower section on the EV kit board are calibration traces  that  are  used  as  a  reference  to  differentiate  the performance  of  the  device  from  the  traces  and  SMA connectors, providing a complete analysis of the device. For  simplicity,  only  channel  1  is  provided  with  calibration  traces.  These  traces  are  also  intended  to  be  used for  the  s-parameter  extraction  of  the  traces  of  the  DUT for deembedding the trace effect from the performance of the device for a jitter analysis, as well as a serial link data  analysis.  The  jitter  performance  of  a  PCIe  Gen  III transmitter is specified by deembedding the traces to the package pin of the device.

## Through Traces

The  first  calibration  traces  are  made  with  no  load. The  lengths  of  the  traces  are  equal  to  the  channel  1 circuitry  minus  the  device.  The  traces  starting  from the  SMA  connectors  are  50 I single-ended  controlled impedances. Once the traces run parallel to each other and  are  matched  side  by  side,  the  traces  are  100 I differential-controlled  impedances.  The  through  traces can also be used for measuring the propagation delay and also measuring the exit and entry times of the electrical idle function of the device.

## Short Traces

The second calibration traces are shorted at the device's exposed pad. These traces can be used to extract the s-parameters of the traces of the main DUT, along with the use of the open-ended traces and the through traces. They can also be used for the port extension of a vector  network  analyzer  (VNA)  (e.g.,  Agilent  Technologies N5230A), along with the open traces.

## Open Traces

The third  calibration  traces  are  open  near  the  device's exposed pad. These traces can be used to extract the s-parameters of the traces of the main DUT, along with the use of the short-ended traces and the through traces. They can also be used for the port extension of a VNA for calibration, along with the short traces.

## Jumper Selection

Tables 1-5 show the control settings for the device.

Table 1. Device Enable Setting (JU5)

| EN (JU5)   | DESCRIPTION   |
|------------|---------------|
| 0 (Open)*  | Standby mode  |
| 1 (Closed) | Normal mode   |

## Table 2. Input Equalization Setting (JU1, JU2)

| INEQ1 (JU1)   | INEQ0 (JU2)   |   INPUT EQUALIZATION (dB) |
|---------------|---------------|---------------------------|
| 0 (Open)*     | 0 (Open)*     |                         3 |
| 0 (Open)      | 1 (Closed)    |                         5 |
| 1 (Closed)    | 0 (Open)      |                         7 |
| 1 (Closed)    | 1 (Closed)    |                         9 |

## Table 3. Output Deemphasis/Preshoot Setting (JU3, JU4, JU7)

| OEQ2 (JU7)   | OEQ1 (JU3)   | OEQ0 (JU4)   | OUTPUT DEEMPHASIS/ PRESHOOT RATIO (dB)   |
|--------------|--------------|--------------|------------------------------------------|
| 0 (Open)*    | 0 (Open)*    | 0 (Open)*    | 0                                        |
| 0 (Open)     | 0 (Open)     | 1 (Closed)   | 3.5                                      |
| 0 (Open)     | 1 (Closed)   | 0 (Open)     | 6                                        |
| 0 (Open)     | 1 (Closed)   | 1 (Closed)   | 6 (Peak-to-peak swing is 1.2V)           |
| 1 (Closed)   | 0 (Open)     | 0 (Open)     | 3.5                                      |
| 1 (Closed)   | 0 (Open)     | 1 (Closed)   | 6                                        |
| 1 (Closed)   | 1 (Closed)   | 0 (Open)     | 9 (Peak-to-peak swing is 0.9V)           |
| 1 (Closed)   | 1 (Closed)   | 1 (Closed)   | 9 (Peak-to-peak swing is 1V)             |

<!-- image -->

## MAX14950 Evaluation Kit

## Evaluates: MAX14950

## Table 4. Receiver Detection Input Function Setting (JU5, JU6)

| RXDET (JU6)         | EN (JU5)   | DESCRIPTION                                                                                                                                                              |
|---------------------|------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| X                   | 0 (Open)*  | Receiver detection is inactive.                                                                                                                                          |
| X                   | 1 (Closed) | Following a rising edge of the EN signal, indefinite retry until receiver detected at least one channel. Retry stops a few times after any channel receiver is detected. |
| Rising/falling edge | 1 (Closed) | Initiate receiver detection.                                                                                                                                             |

X = Don't care.

* Default position.

## Table 5. Electrical Idle Detection Limits Threshold Setting (JU8)

| EIVIL (JU8)   | THRESHOLD LOW LIMIT (mV)   | THRESHOLD HIGH LIMIT (mV)   |
|---------------|----------------------------|-----------------------------|
| 0 (Open)*     | 108 (typ)                  | 115 (typ)                   |
| 1 (Closed)    | 81 (typ)                   | 115 (typ)                   |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX14950 Evaluation Kit

## Evaluates: MAX14950

<!-- image -->

Figure 1a. MAX14950 EV Kit Schematic (Sheet 1 of 2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX14950 Evaluation Kit

## Evaluates: MAX14950

<!-- image -->

Figure 1b. MAX14950 EV Kit Schematic (Sheet 2 of 2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 2. MAX14950 EV Kit Component Placement GuideComponent Side

<!-- image -->

## MAX14950 Evaluation Kit

## Evaluates: MAX14950

Figure 3. MAX14950 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 4. MAX14950 EV Kit PCB Layout- Inner Layer 2

<!-- image -->

## MAX14950 Evaluation Kit

## Evaluates: MAX14950

Figure 5. MAX14950 EV Kit PCB Layout- Inner Layer 3

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 6. MAX14950 EV Kit PCB Layout-Solder Side

<!-- image -->

## MAX14950 Evaluation Kit

## Evaluates: MAX14950

Figure 7. MAX14950 EV Kit Component Placement GuideSolder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX14950EVKIT+ | EV Kit |

+ Denotes lead(Pb)-free and RoHS compliant.

## MAX14950 Evaluation Kit

## Evaluates: MAX14950

## MAX14950 Evaluation Kit

## Evaluates: MAX14950

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 1/11            | Initial release | -               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.