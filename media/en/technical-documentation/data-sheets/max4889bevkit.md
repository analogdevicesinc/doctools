<!-- lastmod 2022-08-04 -->
<!-- image -->

## General Description

The MAX4889B evaluation kit (EV kit) provides a proven design to evaluate the MAX4889B PCI Express ® (PCIe) Gen II 5.0Gbps passive switch. The MAX4889B is a quad double-pole/double-throw (4 x DPDT) switch ideal for switching four half lanes of PCIe data between two destinations. The MAX4889B EV kit is used for critical tests (e.g., eye diagrams and s-parameter measurements such as insertion loss, return loss, and off-isolation).

The MAX4889B EV kit PCB comes with a MAX4889BETO+ installed. The MAX4889BETO+ is available in a lead(Pb)free 3.5mm x 9.0mm, 42-pin TQFN package with an exposed pad.

The MAX4889B EV kit can also be used to evaluate the MAX4889C. Contact the factory for a free sample of the pin-compatible MAX4889CETO+.

## Component List

| DESIGNATION                        |   QTY | DESCRIPTION                                                          |
|------------------------------------|-------|----------------------------------------------------------------------|
| C1, C2, C6, C8, C10, C12, C14, C16 |     8 | 0.1µF ±10%, 16V X7R ceramic capacitors (0402) Murata GRM155R71C104K  |
| C3, C4, C5, C7, C9, C11, C13, C15  |     8 | 1000pF ±10%, 16V X5R ceramic capacitors (0402) Murata GRM155R61C102K |
| C17                                |     1 | 10µF ±10%, 16V X5R ceramic capacitor (0805) Murata GRM21BR61C106K    |
| JU1                                |     1 | 3-pin header                                                         |
| P1-P12                             |    12 | Edge-mount receptacle, SMA connectors                                |
| R1, R2                             |     2 | 49.9 Ω ±1% resistors (0402)                                          |
| U1                                 |     1 | 5.0Gbps PCIe passive switch (42 TQFN-EP*) Maxim MAX4889BETO+         |
| -                                  |     1 | Shunt                                                                |
| -                                  |     1 | PCB: MAX4889B Evaluation Kit+                                        |

## Features

- ♦ Eye Diagram Test Circuit with SMA Input/Output
- ♦ Calibration Trace Load and No Load
- ♦ Lead(Pb)-Free and RoHS Compliant
- ♦ Proven PCB Layout
- ♦ Fully Assembled and Tested

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX4889BEVKIT+ | EV Kit |

## Quick Start

## Required Equipment

- MAX4889B EV kit
- 3.3V/100mA DC power supply
- Pulse data generator with frequency of at least 2.5GHz (e.g., Agilent 81142A)
- Digital  serial  analyzer  sampling  oscilloscope with frequency of at least 2.5GHz (e.g., Tektronix DSA8200)
- Six SMA cables of equal lengths

## Procedure

The MAX4889B EV kit is fully assembled and tested. Follow the steps below to verify board operation and eye diagram/jitter measurements. Caution: Do not turn on the power until all connections are completed.

- 1) Connect the 3.3V/100mA power supply to the VCC and GND pads of the EV kit.
- 2) Verify that JU1 is in the 2-3 position.
- 3) Set up the pulse data generator to a bit rate of 5Gbps (2.5GHz), the VHI and VLO to +250mV and -250mV, respectively, nonreturn-to-zero (NRZ) mode, and desired pseudorandom binary (bit) sequence (PRBS) with 2 15 -1 or 2 7 -1 patterns.
- 4) Use a pair of SMA cables to connect the differential output signals of the pulse data generator to the AOUTA+ and AOUTA- (P5 and P6) of the EV kit.
- 5) Use a single SMA cable to connect the trigger input of the digital serial analyzer to the trigger output of the pulse data generator.

## Component Supplier

| SUPPLIER                               | PHONE        | WEBSITE                      |
|----------------------------------------|--------------|------------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata- northamerica.com |

Note: Indicate that you are using the MAX4889B when contacting this component supplier.

PCI Express is a registered trademark of PCI-SIG Corp.

## MAX4889B Evaluation Kit

- 6) Use a single SMA cable to connect the clock input of the pattern sync module of the digital serial analyzer to the clock output of the pulse data generator.
- 7) Use the other pair of SMA cables to connect the two sampling channels of the digital serial analyzer to AIN+ and AIN- (P1 and P2) of the EV kit.
- 8) Set the digital serial analyzer to infinite persistence and select the math function of the signal ((AIN+) (AIN-)).
- 9) Adjust the vertical scale to 100mV/div and horizontal scale to 200ps/div on the digital serial analyzer.
- 10) Turn on the DC power supply.
- 11) Enable the data and clock outputs on the pulse data generator and observe the waveform on the digital serial analyzer.
- 12) Save the waveform on the digital serial analyzer.
- 13) Disable the data and clock outputs of the pulse generator.
- 14) Turn off the DC power supply.
- 15) Remove the pair of SMA cables connected to AOUTA+ and AOUTA- (P5 and P6) of the EV kit and connect the cables to R\_AOUT\_+ and R\_AOUT\_-(P9 and P10) of the EV kit.
- 16) Remove the pair of SMA cables connected to AIN+ and AIN- (P1 and P2) of the EV kit and connect the cables to R\_AIN+ and R\_AIN- (P7 and P8) of the EV kit.
- 17) Enable the data and clock outputs on the pulse data generator and observe the waveform on the digital serial analyzer.
- 18) Compare the waveform to the waveform that includes the MAX4889B and observe the jitter/eye height of both systems. Take the difference in jitter/eye  height,  which is the extra jitter/eye height coming from the MAX4889B.

## Detailed Description of Hardware

The MAX4889B EV kit provides a proven design to evaluate the MAX4889B PCIe Gen II 5.0Gbps passive switch. The MAX4889B is a quad double-pole/double-throw (4 x DPDT) switch ideal for switching four half lanes of PCIe data between two destinations. The MAX4889B EV kit is used for critical tests (e.g., eye diagrams and s-parameter measurements such as insertion loss, return loss, and off-isolation).

For simplicity, only one channel of the device is used in the  EV  kit.  Only  the  AIN\_,  AOUTA\_,  and  AOUTB\_ signals are used in the EV kit. All signal traces coming out of  the  MAX4889B are 100 Ω differential controlledimpedance traces. Once the traces split into separate directions, the traces are 50 Ω single-ended controlled impedances, which is equivalent to 100 Ω differentially.

The MAX4889B operates from a 3.0V to 3.6V supply.

## Calibration Trace

At the bottom of the EV kit board are calibration traces used as a reference to differentiate the performance of the switch from the traces and SMA connector providing a complete analysis of the MAX4889B.

## No Load

The first calibration traces are made with no load. The lengths of the traces are equal to the above circuitry minus the MAX4889B. The traces starting from R\_AIN\_ and R\_AOUT\_ are 50 Ω single-ended controlled impedances. Once the traces run parallel to each other, and are matched side by side, the traces are 100 Ω differential controlled impedances.

## Load

The second calibration traces are made with a 50 Ω load. The lengths of the traces are half the calibration traces without the load.

## Jumper Selection

Table 1 shows the control input for SEL. The MAX4889B EV kit  default  setting  is  JU1  in  the  2-3  position,  which selects the signal's path between AIN\_ and AOUTA\_. Move JU1 to the 1-2 position to test the quality of the signals between AIN\_ and AOUTB\_.

## Table 1. SEL Control Input (JU1)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                          |
|----------|------------------|------------------------------------------------------|
| JU1      | 1-2              | Selects signal path between AIN_ and AOUTB_ channels |
| JU1      | 2-3*             | Selects signal path between AIN_ and AOUTA_ channels |

*Default position.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX4889B Evaluation Kit

<!-- image -->

Figure 1. MAX4889B EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4889B Evaluation Kit

Figure 2. MAX4889B EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 3. MAX4889B EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX4889B Evaluation Kit

Figure 4. MAX4889B EV Kit PCB Layout-Inner Layer 2

<!-- image -->

<!-- image -->

Figure 5. MAX4889B EV Kit PCB Layout-Inner Layer 3

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4889B Evaluation Kit

Figure 6. MAX4889B EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

SPRINGER

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600