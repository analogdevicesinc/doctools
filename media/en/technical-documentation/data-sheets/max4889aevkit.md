<!-- lastmod 2022-08-03 -->
<!-- image -->

## General Description

The MAX4889A evaluation kit (EV kit) provides a proven design to evaluate the MAX4889A PCI Express ® (PCIe) Gen II 5.0Gbps passive switch. The MAX4889A is an octal single-pole/double-throw (8 x SPDT) ideal for switching four half lanes of PCIe data between four destinations. The MAX4889A EV kit is used for critical tests (i.e.,  eye  diagrams and s-parameter measurements such as insertion loss, return loss, and off-isolation).

The MAX4889A  EV kit PCB comes with a MAX4889AETO+ installed. The MAX4889AETO+ is available in a lead-free 3.5mm x 9.0mm, 42-pin TQFN package.

Contact the factory for free samples of the pin-compatible MAX4889ETO+ PCIe Gen I 2.5Gbps passive switch.

| DESIGNATION   |   QTY | DESCRIPTION                                                          |
|---------------|-------|----------------------------------------------------------------------|
| C1-C8         |     8 | 0.1µF ±10%, 16V X7R ceramic capacitors (0402) Murata GRM155R71C104K  |
| C9            |     1 | 10µF ±10%, 16V X5R ceramic capacitor (0805) Murata GRM21BR61C106K    |
| C10-C16       |     7 | 1000pF ±10%, 16V X5R ceramic capacitors (0402) Murata GRM155R61C102K |

Features

- ♦ Eye Diagram Test Circuit with SMA Input/Output
- ♦ Calibration Trace
- ♦ Lead-Free and RoHS-Compliant
- ♦ Proven PCB Layout
- ♦ Fully Assembled and Tested

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX4889AEVKIT+ | EV Kit |

## Component List

*EP = Exposed pad.

| DESIGNATION   |   QTY | DESCRIPTION                                                           |
|---------------|-------|-----------------------------------------------------------------------|
| JU1           |     1 | 3-pin header                                                          |
| P1-P10        |    10 | Edge-mount SMA connectors                                             |
| U1            |     1 | 5.0Gbps PCI Express passive switches (42 TQFN-EP*) Maxim MAX4889AETO+ |
| -             |     1 | Shunts                                                                |
| -             |     1 | PCB: MAX4889A Evaluation Kit+                                         |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |

Note:

Indicate that you are using the MAX4889A or MAX4889 when contacting these component suppliers.

PCI Express is a registered trademark of PCI-SIG Corp.

1

## MAX4889A Evaluation Kit

## Quick Start

## Required Equipment

Before beginning, the following equipment is needed:

- MAX4889A EV kit
- 3.3V/100mA DC power supply
- Pulse data generator with frequency of at least 2.5GHz (e.g., Agilent 81142A)
- Digital  serial  analyzer  sampling  oscilloscope with frequency of at least 2.5GHz (e.g., Tektronix DSA8200)
- Six SMA cables of equal lengths

## Procedure

The MAX4889A EV kit is fully assembled and tested. Follow the steps below to verify board operation and eye diagram/jitter measurements. Caution: Do not turn on the power until all connections are completed.

- 1) Connect the 3.3V/100mA power supply to the VCC and GND pads of the EV kit. Do not turn on the power until all connections are completed.
- 2) Verify that jumper JU1 is in the 1-2 position.
- 3) Set up the pulse data generator to a bit rate of 5Gbps, the VHI and VLO to +250mV, and -250mV, NRZ (nonreturn-to-zero) mode, and desired psuedorandom binary (bit) sequence (PRBS)-e.g., 2 15 1 or 2 7 -1 patterns.
- 4) Use a pair of SMA cables to connect the differential signals (DATA and DATA ) of the pulse data generator to NO1+ and NO1- on the EV kit.
- 5) Use a single SMA cable to connect the trigger input of the digital serial analyzer to the trigger output of the pulse data generator.
- 6) Use a single SMA cable to connect the clock input of the pattern sync module of the digital serial analyzer to the clock output of the pulse data generator. This is specific to the DSA8200 Tektronix scope.
- 7) Use the other pair of SMA cables to connect the two sampling channels of the digital serial analyzer to COM1+ and COM1- on the EV kit.
- 8) Set the digital serial analyzer to infinite persistence and select the math function of the signal ((COM1+) - (COM1-)). Also set the trigger on digital serial analyzer to trigger on pattern sync module.
- 9) Adjust the vertical scale to 100mV/div and horizontal scale to 200ps/div on the digital serial analyzer.
- 10) Turn on the DC power supply.
- 11) Enable the data and clock outputs on the pulse data generator and observe the waveform on the digital serial analyzer.
- 12) Save the waveform on the digital serial analyzer.
- 13) Disable the data and clock output of the pulse data generator.
- 14) Turn off the DC power supply.
- 15) Remove the pair of SMA cables connected to NO1+ and NO1- on the EV kit and connect the cables to RN\_1+ and RN\_1- on the EV kit.
- 16) Remove the pair of SMA cables connected to COM1+ and COM1- on the EV kit and connect the cables to RCOM1+ and RCOM1- on the EV kit.
- 17) Enable the data and clock outputs on the pulse data generator and observe the waveform on the digital serial analyzer.
- 18) Compare the waveform to the waveform that includes the MAX4889A and observe the jitter/eye height of both systems. Take the difference in jitter/eye height and that equals the extra jitter/eye height coming from the MAX4889A.

## Detailed Description of Hardware

The MAX4889A evaluation kit (EV kit) provides a proven design to evaluate the MAX4889A PCI Express (PCIe) Gen II 5.0Gbps passive switch. The MAX4889A is an octal single-pole/double-throw (8 x SPDT) ideal for switching four half lanes of PCIe data between four destinations. The MAX4889A EV kit is used for critical tests (i.e.,  eye  diagrams and s-parameter measurements such as insertion loss, return loss, and off-isolation).

For simplicity, only one channel of the device is used in the  EV  kit.  Only  the  COM1\_,  NC1\_,  and  NO1\_ signals are used in the EV kit. All signal traces coming out of the  MAX4889A are 100 Ω differential  controlled-impedance traces. Once the traces split into separate directions, the traces are 50 Ω single-ended controlled impedances, which is equivalent to 100 Ω differentially.

At the bottom of the EV kit board are calibration traces that are used as a reference to differentiate the performance of the switch from the traces and SMA connector  providing a complete analysis of the MAX4889A. The lengths of the traces are designed to be similar to the above circuitry, but without the MAX4889A.The traces starting from RCOM1\_ and RN\_1\_ are 50 Ω single-ended controlled impedances. Once the traces run parallel  to  each  other  and  are  matched  side  by  side, the traces are 100 Ω differential controlled impedances.

The MAX4889A operates from a 1.65V to 3.6V supply.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX4889A Evaluation Kit

## Jumper Selection

Table 1 shows the control input for SEL. The EV kit default setting is JU1 in the 1-2 position, which selects the  signal  path  between COM1\_ and NO1\_ channels. Move JU1 to the 2-3 position to test the quality of the signals between COM1\_ and NC1\_ channels.

<!-- image -->

Table 1. SEL Control Input (JU1)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                         |
|----------|------------------|-----------------------------------------------------|
| JU1      | 1-2*             | Selects signal path between COM1_ and NO1_ channels |
| JU1      | 2-3              | Selects signal path between COM1_ and NC1_ channels |

*Default position.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4889A Evaluation Kit

Figure 1. MAX4889A EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4889A Evaluation Kit

Figure 2. MAX4889A EV Kit Component Placement GuideComponent Side

<!-- image -->

<!-- image -->

Figure 3. MAX4889A EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4889A Evaluation Kit

Figure 4. MAX4889A EV Kit PCB Layout-Inner Layer 2

<!-- image -->

Figure 5. MAX4889A EV Kit PCB Layout-Inner Layer 3

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4889A Evaluation Kit

Figure 6. MAX4889A EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

7