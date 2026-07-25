<!-- lastmod 2022-08-04 -->
## MAX5725 Evaluation System

## General Description

The  MAX5725  evaluation  system  demonstrates  the MAX5725 ultra small, 8-channel, low-power, 12-bit buff -ered output DAC with internal reference. The MAX5725 peripheral  module  (PMod)  and  the  USBPMBP2  module form a system (MAX5725SYS1#). Windows 7/8/10-compatible  software  provides  a  user-friendly  interface  that demonstrates features of the MAX5725.

The MAX5725 peripheral module comes installed with the 20-bump WLP package, MAX5725AWP+.

## MAX5725 EV System

<!-- image -->

Windows are registered trademarks and registered service marks of Microsoft Corporation.

Pmod is a trademark of Digilent Inc.

## Features

- 2x6-Pin PMod™-Compatible Connector (SPI)
- On-Board Voltage Reference (MAX6173)
- Proven PCB Layout
- Fully Assembled and Tested
- Windows 7/8/10-Compatible Software

Ordering Information appears at end of data sheet.

Evaluates: MAX5725

<!-- image -->

## MAX5725 Evaluation System

## Quick Start

## Required Equipment

- MAX5725 EV System (includes MAX5725PMB and USBPMBP2 module with micro USB cable)
- Voltmeter
- Oscilloscope

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from the EV system software. Text in bold and underlined refers to items from the Windows operating system.

## Procedure

The EV system is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Visit http://www.maximintegrated.com/ and search for MAX5725 product page. Click the DESIGN RESOURCES tab. The software associated with this part appears under the MAX5725 product.
- 2) Align the X2 connector of the USBPMBP2 with the J2 connector of the MAX5725 Pmod.
- 3) Verify that a shunt is placed on the JU1 and JU2 headers and no shunt on the JU3 header.
- 4) Connect the voltmeter at the REF test point.
- 5) Connect the oscilloscope probe to pin 1 of header J3.
- 6) Connect the USB cable from the PC to the USBPMBP2 board.
- 7) Open the GUI, MAX5725EVKIT.exe (Figure 1).
- 8) Click Scan Adapters . Then select the option PMODxxxxxx (where xxxxxx is numeric) and click Connect .
- 9) To evaluate the MAX5725, click Sample Continuously .

Figure 1. MAX5725 EV System Main Window

<!-- image -->

Evaluates: MAX5725

│

## MAX5725 Evaluation System

## General Description of Software

The  main  window  of  the  MAX5725  peripheral  module controls  the  evaluation  of  the  MAX5725  IC.  Waveform generator is included that allows the user to quickly evaluate the device.

## USB2PMB Adapter

The controls within the USB2PMB group box allows the user to select the appropriate USB2PMB devices. When Scan Adapters is  enabled, it updates the dropdown list with all USB2PMB devices. PMODxxxxxx (where xxxxxx is numeric) appears within the dropdown list with the EV system connected to the PC. Make the appropriate selection respective of the IC and click Connect .

## DAC Command

The DAC Commands drop down list allows the users to select the internal registers to code or load specific DAC channel(s).

## Output Channel

To  select  an  individual  channel  or  all  channels,  click Output Channel drop down list.

Figure 2. MAX5725 EV System Calibration Window

<!-- image -->

## Signal Setup

The Signal Setup controls are used to quickly evaluate the EV system, which is similar to a functional generator. It  provides  waveforms  in  sine,  left  and  right  sawtooth, triangle,  square,  and  white  noise.  A  user  can  adjust Amplitude, Offset, and Frequency for each waveform.

## Sampling

The Sample group box allows for a single or continuous sampling. It also adjusts the SPI SCLK and sampling rate. The Scope captures data DAC Counts , Voltage(V) , and FFT graphing options.

## Calibration

The Calibration button provides access to all other registers  within  the  MAX5725  IC.  The Calibration window allows  the  user  to  set  internal  or  external  references, power down modes, reset options, default scale options, watchdog  timer,  and LDAC and CLR control.  For  a detailed description of each register function, refer to the MAX5725 IC datasheet.

Evaluates: MAX5725

│

## General Description of Hardware

The  MAX5725  EV  system  demonstrates  the  8-channel 12-bit ADC. The USBPMBP2 module and the MAX5725 Pmod completes the system. The USBPMB2 acts as the master and generates all the SPI communications.

## User-Supplied SPI

To evaluate the EV system with a user-supplied SPI bus, the connector J2 is a compatible 2x6 pin PMod connector.

## User-Supplied VDD

The MAX5725 supply (VDD) is powered by USB and regulated to 3.3V by default when a PMod compatible master module is  connected  to  the  J2  connector  of  the  Pmod. For a user-supplied VDD, a PMod master module is not allowed on the J2 connector. The user needs to apply a voltage between +2.7V to +5.5V at the VDD test point.

## Ordering Information

| PART         | TYPE              |
|--------------|-------------------|
| MAX5725SYS1# | EV System         |
| MAX5725PMB#  | Peripheral Module |
| USBPMB2#     | Adapter Board     |

# Denotes RoHS compliant.

## User-Supplied VDDIO

The  MAX5725 I/O supply  (VDDIO)  is  powered  by  USB and regulated to 3.3V by default when a PMod compatible  master module is connected to the J2 connector of the Pmod. For a user supplied VDDIO, remove the shunt from the JU2 header and apply a voltage between +1.8 and +5.5V at the VDDIO test point.

## User-Supplied Reference (REF)

The MAX5725PMB comes with an on-board MAX6173, 2.5V voltage reference. To use this feature, a 5V DC supply must be applied at the TP1 test point and a shunt must be installed  on  the  JU3  header. To  use  a  user-supplied external  reference,  do  not  place  a  shunt  on  the  JU3 header and apply +1.24V to VDD at the REF test point.

│

## MAX5725 EV Kit Bill of Materials

| ITEM   | REF_DES                    | DNI/DNP   |   QTY | MFG PART #                                                                            | MANUFACTURER                         | VALUE             | DESCRIPTION                                                                                                             | COMMENTS   |
|--------|----------------------------|-----------|-------|---------------------------------------------------------------------------------------|--------------------------------------|-------------------|-------------------------------------------------------------------------------------------------------------------------|------------|
| 1      | REF, TP1, VDD, /IRQ, VDDIO | -         |     5 | 5010                                                                                  | KEYSTONE                             | N/A               | TESTPOINT WITH 1.80MM HOLE DIA, RED, MULTIPURPOSE;                                                                      |            |
| 2      | C1                         | -         |     1 | GRM21BR71A106KE51                                                                     | MURATA                               | 10UF              | CAPACITOR; SMT (0805); CERAMIC CHIP; 10UF; 10V; TOL=10%; MODEL=GRM SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R             |            |
| 3      | C2-C4, C36                 | -         |     4 | C0603C104K4RAC; GCM188R71C104KA37; C1608X7R1C104K; GRM188R71C104K; C0603X7R160-104KNE | KEMET/MURATA/TDK/VENKEL LTD.         | 0.1UF             | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 16V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R;                             |            |
| 4      | C5                         | -         |     1 | C0603C101J5GAC; ECJ-1VC1H101J; C1608C0G1H101J080AA; GRM1885C1H101JA01                 | KEMET/PANASONIC/TDK/MURATA           | 100PF             | CAPACITOR; SMT (0603); CERAMIC CHIP; 100PF; 50V; TOL=5%; MODEL=C0G; TG=-55 DEGC TO +125 DEGC; TC=COG                    |            |
| 5      | GND                        | -         |     1 | 5011                                                                                  | KEYSTONE                             | N/A               | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |            |
| 6      | J2                         | -         |     1 | TSW-106-08-S-D-RA                                                                     | SAMTEC                               | TSW-106-08-S-D-RA | CONNECTOR; THROUGH HOLE; DOUBLE ROW; RIGHT ANGLE; 12PINS;                                                               |            |
| 7      | J3                         | -         |     1 | PEC08DAAN                                                                             | SULLINS ELECTRONICS CORP.            | PEC08DAAN         | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 16PINS; -65 DEGC TO +125 DEGC                                       |            |
| 8      | JU1-JU3                    | -         |     3 | PEC02SAAN                                                                             | SULLINS                              | PEC02SAAN         | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                               |            |
| 9      | R3                         | -         |     1 | CRCW06031M00FK; MCR03EZPFX1004                                                        | VISHAY DALE/ROHM                     | 1M                | RESISTOR, 0603, 1M OHM, 1%, 100PPM, 0.10W, THICK FILM                                                                   |            |
| 10     | R28                        | -         |     1 | CRCW06034K70FK                                                                        | VISHAY DALE                          | 4.7K              | RESISTOR; 0603; 4.7K; 1%; 100PPM; 0.10W; THICK FILM                                                                     |            |
| 11     | R29                        | -         |     1 | ERJ3EKF1003                                                                           | PANASONIC                            | 100K              | RESISTOR; 0603; 100K OHM; 1%; 100PPM; 0.1W; THICK FILM                                                                  |            |
| 12     | U1                         | -         |     1 | MAX5725AWP+                                                                           | MAXIM                                | MAX5725AWP+       | IC; DAC; ULTRA-SMALL; OCTAL-CHANNEL; 12-BIT BUFFERED OUTPUT DAC WITH INTERNAL REFERENCE AND SPI INTERFACE; WLP20        |            |
| 13     | U7                         | -         |     1 | MAX6173AASA+                                                                          | MAXIM                                | MAX6173AASA       | IC; VREF; HIGH-PRECISION VOLTAGE REFERENCE WITH TEMPERATURE SENSOR; NSOIC8 150MIL                                       |            |
| 14     | PCB                        | -         |     1 | MAX5725PMB_APPS_A                                                                     | MAXIM                                | PCB               | PCB:MAX5725PMB_APPS_A                                                                                                   |            |
| 15     | R4                         | DNP       |     0 | RC1608J000CS; CR0603-J/-000ELF; RC0603JR-070RL                                        | SAMSUNG ELECTRONICS/ BOURNS/YAGEO PH | 0                 | RESISTOR; 0603; 0 OHM; 5%; JUMPER; 0.10W; THICK FILM                                                                    |            |
| 16     | C6-C9, C37-C40             | DNP       |     0 | N/A                                                                                   | N/A                                  | OPEN              | CAPACITOR; SMT (0603); OPEN; FORMFACTOR                                                                                 |            |
| TOTAL  |                            |           |    23 |                                                                                       |                                      |                   |                                                                                                                         |            |

Evaluates: MAX5725

## MAX5725PMB Schematic

<!-- image -->

## MAX5725 Evaluation System

## MAX5725PMB Layout

Silk Top

<!-- image -->

Top

<!-- image -->

Evaluates: MAX5725

Bottom

<!-- image -->

Silk Bottom

<!-- image -->

│

## MAX5725 Evaluation System

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 8/21            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implieG  Ma[im ,nteJrateG reserYes the riJht to chanJe the circuitr\ anG speci¿cations without notice at an\ time

<!-- image -->

│

Evaluates: MAX5725