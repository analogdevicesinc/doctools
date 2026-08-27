<!-- lastmod 2022-08-02 -->
## MAX14001PMB

## General Description

The MAX14001 peripheral module provides the hardware to evaluate the MAX14001 isolated ADC to measure two channels of data, line voltage (up to 230V AC or ±325V DC) and load current (up to 5A). All power and communication is with a simple USB cable-no separate field side power is  required.  The  integrated  DC-DC  converter  provides power isolation for  the  system  and  powers  all  field-side circuitry.  This  integrated  design  reduces  the  BOM  and board  dimension  for  building  an  isolated  ADC  system. Refer  to  the  MAX14001  IC  data  sheet  for  detailed information regarding operation of the IC.

The  MAX14001PMB  has  a  12-pin  Pmod ™ -compatible connector for SPI communication. The peripheral module can  be  used  in  various  ways.  Maxim  sells  a  low-cost USB2PMB2  adapter  board  that  uses  the  Munich  GUI software for communication through a USB cable. This is not included with this board, but is available from Maxim or one of our distributors. Alternatively, any microcontroller or  FPGA  with  a  12-pin  Pmod-compatible  connector  for SPI communication can be used.

Ordering Information appears at end of data sheet.

## MAX14001PMB Photo

Pmod is a trademark of Digilent Inc.

<!-- image -->

## Features

- Easy Evaluation of the MAX14001/MAX14002
- 3.75kV RMS  Isolation for Both Data (SPI) and Power (DC-DC Supply)
- Peripheral Module Is Powered from a Single 3.3V Supply (USB2PMB2 Is USB-Powered), No Field Side Supply Required
- Measure AC or DC, Voltages Up to 230V AC or ±325V DC and Current Up to 5A
- Programmable Comparator Output
- Works With USB2PMB2 Adapter and Munich GUI Software
- Fully Assembled and Tested
- Proven PCB Layout
- RoHS Compliant

## Contents

- MAX14001PMB, including two MAX14001s

Evaluates: MAX14001

<!-- image -->

## Quick Start

## Required Equipment

- MAX14001PMB peripheral module
- USB2PMB2 adapter board
- Micro-USB cable
- Windows XP®, Windows® 7, Windows 8.1, or Windows 10 PC with a spare USB port

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from the EV system software. Text in bold and underline refers to items from the Windows operating system.

## Procedure

If the USB2PMB1 adapter is used, download software by following the steps below to get started:

- 1) Visit www.maximintegrated.com/evkitsoftware to download  the  latest  version  of  the  Munich\_GUI  software, version 2.12 or later, Munich\_GUISetupV2.12.ZIP .
- 2) Save the software  to  a  temporary  folder.  Unzip  the .ZIP  file  and  double-click  the  .EXE  file  to  run  the installer.  A  message  box  asking Do  you  want  to allow the following program to make changes to this computer? can appear. If so, click Yes .
- 3) The installer includes the drivers for the hardware and software. Follow the instructions on the installer and once complete, click Finish .  The  default  location  of the software is in the program files directory.
- 4) Connect the MAX14001PMB Pmod connector X1 to the connector on USB2PMB2.
- 5) Connect the USB2PMB2 to the PC with the Mini-USB cable.  Windows  should  automatically  recognize  the device and display a message near the System Icon menu indicating that the hardware is ready to use.
- 6) Once  the  hardware  is  ready  to  use,  launch  the software.  The  status  bar  in  the  GUI  should  display Disconnected in the bottom right-hand corner. Go to the Device tab to select the MAX14001PMB.

## Detailed Description of Software

## Connect to Hardware

The Device menu has options to search and connect to the hardware. Use the Scan Adapters option to search for  the  USB2PMB2  modules  connected  to  the  PC.  If modules  are  found,  the  serial  numbers  of  the  modules are listed in the USB2PMB adapter drop-down list. Select

Windows and Windows XP are registered trademarks and registered service marks of Microsoft Corporation.

the serial number in the USB2PMB2's list to connect the software to communicate with that module. The software can only communicate to one module at a time.

## Sample

To start continuous monitoring, click the Sample Continuously button  (see  Figure  1).  For  a  single  status, click the Sample Once button. Moving the cursor over the graph area allows the user to select channel type (voltage or current), change scale, zoom, print, or save waveforms.

## Detailed Description of Hardware

The MAX14001PMB peripheral module has two MAX14001  devices  (U11  and  U51).  One  channel  is configured  to  measure  the  line  voltage  with  maximum voltage  range  selected  by  a  resistor  chain.  The  other channel  is  configured  to  measure  the  voltage  across  a shunt resistor to provide load current. Both AC and DC signals  can  be  measured.  No  external  field  side  (high voltage)  power  is  required  as  the  MAX14001  has  an integrated,  isolated  DC-DC  converter.  The  complete peripheral module is powered from a single 3.3V supply, VDD, which is called the logic side (or low voltage side). If the USB2PMB2 module is used this takes power from the 5V supply on the USB connector to the PC. The SPIcompatible connector uses two chip-select signals ( CS1 and CS2 ) to control each chip through a single connector/ GUI interface.

## MAX14001 Isolated ADC

The  MAX14001  has  a  free-running,  10-bit  SAR  ADC, sampling at ~10ksps, that continously updates the data register  for  each  new  conversion.  If  the  source  being monitored is DC or low-frequency AC (such as 50Hz or 60Hz mains) this  sample  rate  easily  meets  the  Nyquist criteria and, although the two ADCs are not synchronized, the reading can be considered to be simultaneous given the relatively high sample rate.

The  device  digitizes  the  input  voltage  on  the  field  side and  transmits  the  data  across  the  isolation  barrier  to  a data receiver on the logic side; which also has a programmable comparator. The host can read the ADC value from the data receiver through the SPI interface. Additionally, the  comparator  compares  the  digitized  reading  to  the programmable  thresholds  and  outputs  high  if  data  is above the upper threshold, and low if data is below the lower threshold. This hardware feature is extremely use-

## MAX14001PMB

ful for setting real-time trip points, or as demonstrated, it can be used to measure periodic signals. For example, the frequency of the field-side input voltage can be easily calculated using zero-crossing of the comparator output.

## AC or DC Line Monitor Application

To  demonstrate  the  features  and  ease-of-use  of  the MAX14001, this peripheral module shows how to build an isolated ADC and provides software demonstrating how it can be used to measure mains power, such as a 120V, 60Hz single-phase load or 230V, 50Hz single-phase load, with currents of a few amps.

The MAX14001 peripheral module uses two MAX14001s, one to measure the voltage and another to measure current. The whole board is controlled and powered by the USB2PMB2 adapter that uses the USB power from a PC. The live (L) and neutral (N) lines are input to the board and a fuse on the board protects circuits from large currents. Loads can be connected to the board from the terminal connectors.

## Logic Versus Field Side

The  MAX14001PMB  hardware  has  two  channels,  one  to measure voltage and one to measure current, as well as three power domains with different isolated ground potentials:

- The logic side or low-voltage side connects to the SPI-compatible Pmod connector, and is powered from a single 3.3V source connected to VDD, referred to logic ground GNDL.
- The current measurement field side, U51 provides field-side power from VDDF1, which is nominally 3V and can power circuitry up to 70µA. This single supply is used to power the ADC field side circuitry in addition to the external signal conditioning from ultralow bias MAX44265 op amp (U53) and precision voltage reference MAX6006 (U52). All signals are referenced to Field Ground 1 or GNDF1.
- The voltage measurement field side, U11 provides field-side power from VDDF2, which is nominally 3V and can power circuitry up to 70µA. This single supply is used to power the ADC field side circuitry, in addition to the precision voltage reference MAX6006 (U12). All signals are referenced to 'Field Ground 2' or GNDF2.

Note: GNDF1 and GNDF2 are floating grounds only and do not have the same potential or provide earthed protection.

## Shunt Reference

The MAX14001 has an integrated voltage reference; however, for this application, which measures AC signals, both the  positive  and  negative  values  need  to  be  read. Therefore, an external 1.25V shunt reference MAX6006 is used for each ADC with a DC offset of V REF /2 so the negative  part  of  the  AC  input  is  shifted  above  ground, ensuring  the  AIN  signal  input  is  within  the  accepted positive voltage range. The control registers within each MAX14001 are set for external voltage reference source and for pin REFIN to be a current source output, which connects to the MAX6006.

## Current Measurement

The  current ADC  measures  the  voltage  across  a  small 10mΩ sense resistor (R50) in the live wire to obtain the live  line  current  value. The  MAX14001 accepts and analog  input  voltage  from  0  to  +VREFIN.  U52  (MAX6006) is  an  ultra-low  power  shunt  1.25V  voltage  reference that  draws on 1µA, which is used instead of the on-chip voltage  reference  to  bias  the  input  AIN  at  a  midpoint to  allow AC  or  positive  and  negative  input  signals.  U53 (MAX44265) is an ultra-low 4µA supply current op amp with an ultra-low 1pA input bias current. This op amp is configured as an inverting op amp with a gain of 10, with its input centered around V REF /2 or 0.62V. The amplified voltage  across  the  sense  resistor  is  ±0.500mV,  allowing head room for the maximum input range of the ADC.

## Voltage Measurement

A voltage divider is  used  comprising  R21-R26  in conjunction  with  U12  voltage  reference  and  R12-R14. This  limits  the  input  voltage  seen  at  pin  AIN  of  U11  to &lt;  1.25V  and  centers  it  around  V REF /2. The  MAX14001 accepts positive voltage inputs at AIN from 0-1.25V with respect to AGND, so the sense resistor and resistor dividers need to be selected based on input RMS voltage and maximum RMS. Resistor values are selected so that it is close to but not exceeding the calculated ratio to utilize the full ADC range. R21-R26 should be larger than 1MΩ to ensure low current and low power consumption.

## Pmod-Style Connector

The  MAX14001PMB  can  plug  directly  into  a  Pmodcompatible port through X1. The pin defintions are SPIcompatible;  see  Figure  2  for  the  X1  pinout.  The  ADC readings are transmitted to the USB2PMB adapter by the SPI interface.

Figure 1. MAX4001PMB Software (Munich GUI Tab)

<!-- image -->

## Evaluates: MAX14001

Figure 2. MAX14001PMB Schematic

<!-- image -->

Figure 3. MAX14001PMB PCB Layout-SilkscreenTop

<!-- image -->

Figure 5. MAX14001PMB PCB Layout-Bottom

<!-- image -->

## Evaluates: MAX14001

Figure 4. MAX14001PMB PCB Layout-Top

<!-- image -->

Figure 6. MAX14001PMB PCB Layout-Silkscreen Bottom

<!-- image -->

## MAX14001PMB Bill of Materials

|   ITEM | REF_DES                      | DNI/DNP   |   QTY | MFG PART #                                                | MANUFACTURER                                    | VALUE              | DESCRIPTION                                                                                                  |
|--------|------------------------------|-----------|-------|-----------------------------------------------------------|-------------------------------------------------|--------------------|--------------------------------------------------------------------------------------------------------------|
|      1 | C10                          | -         |     1 | TMK105BJ682KVH                                            | TAIYO YUDEN                                     | 6800PF             | CAPACITOR; SMT (0402); CERAMIC CHIP; 6800PF; 25V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R; AUTO             |
|      2 | C11, C13, C53                | -         |     3 | CGA2B3X7R1V104K050BB                                      | TDK                                             | 0.1UF              | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 35V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R; AUTO             |
|      3 | C12, C52                     | -         |     2 | C1005X7R1C103K050BA                                       | TDK                                             | 0.01UF             | CAPACITOR; SMT (0402); CERAMIC; 0.01UF; 16V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                       |
|      4 | C14, C15, C17, C54, C55, C57 | -         |     6 | GRM1555C1E102JA01D; C1005C0G1E102J050BA                   | MURATA; TDK                                     | 1000PF             | CAPACITOR; SMT (0402); CERAMIC CHIP; 1000PF; 25V; TOL=5%; TG=-55 DEGC TO +125 DEGC; TC=C0G                   |
|      5 | C18, C58                     | -         |     2 | CL21B106KOQNNN                                            | SAMSUNG ELECTRONICS                             | 10UF               | CAPACITOR; SMT (0805); CERAMIC CHIP; 10UF; 16V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                    |
|      6 | C50                          | -         |     1 | C0805C474K3RAC; GRM21BR71E474KA01; C2012X7R1E474K         | KEMET; MURATA; TDK                              | 0.47UF             | CAPACITOR; SMT (0805); CERAMIC CHIP; 0.47UF; 25V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R;                 |
|      7 | C51                          | -         |     1 | GRM155R71E104KE14                                         | MURATA                                          | 0.1UF              | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 25V; TOL=10%; MODEL=GRM SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R |
|      8 | C56                          | -         |     1 | C0402X7R500822KNP                                         | VENKEL LTD.                                     | 8200PF             | CAPACITOR; SMT; 0402; CERAMIC; 8200pF; 50V; 10%; X7R; -55degC to + 125degC; 0 +/-15% degC MAX.               |
|      9 | F1                           | -         |     1 | 0685F8000                                                 | BEL FUSE                                        | 8A                 | FUSE; SMT (1206); FAST ACTING; IC=8A; VC=125V                                                                |
|     10 | LED1                         | -         |     1 | SML-P12PT                                                 | ROHM                                            | SML- P12PT         | DIODE; LED; SML-P1 SERIES; ULTRA COMPACT HIGH BRIGHTNESS LED; GREEN; SMT (0402); VF=2.2V; IF=0.02A           |
|     11 | R1                           | -         |     1 | CRCW02011K00FK                                            | VISHAY DALE                                     | 1K                 | RESISTOR; 0201; 1K OHM; 1%; 100PPM; 0.05W; THICK FILM                                                        |
|     12 | R12                          | -         |     1 | ERJ-1GNF2492C                                             | PANASONIC                                       | 24.9K              | RESISTOR; 0201; 24.9K OHM; 1%; 200PPM; 0.05W; THICK FILM                                                     |
|     13 | R13, R14                     | -         |     2 | CRCW080522K0FK                                            | VISHAY DALE                                     | 22K                | RESISTOR; 0805; 22K OHM; 1%; 100PPM; 0.125W; THICK FILM                                                      |
|     14 | R15, R55                     | -         |     2 | ERJ-1GNF1203                                              | PANASONIC                                       | 120K               | RESISTOR; 0201; 120K OHM; 1%; 200PPM; 0.05W; THICK FILM                                                      |
|     15 | R17, R57                     | -         |     2 | MCR006YRTF4701                                            | ROHM SEMICONDUCTOR                              | 4.7K               | RESISTOR; 0201; 4.7K OHM; 1%; 250PPM; 0.05W; THICK FILM                                                      |
|     16 | R21-R26                      | -         |     6 | ERJ-2RKF1004                                              | PANASONIC                                       | 1M                 | RESISTOR; 0402;1M OHM;1%; 100PPM; 0.10W; THICK FILM                                                          |
|     17 | R50                          | -         |     1 | PMR18EZPFU10L0                                            | ROHM SEMICONDUCTOR                              | 0.01               | RESISTOR; 1206; 0.01 OHM; 1%; 100PPM; 1W; METAL FILM                                                         |
|     18 | R51, R58, R59                | -         |     3 | CRCW08050000ZS; ERJ-6GEY0R00V; RC2012J000; RMCF0805ZT0R00 | VISHAY DALE/PANASONIC/STACKPOLE ELECTRONICS INC | 0                  | RESISTOR; 0805; 0 OHM; JUMPER; 0.125W; THICK FILM                                                            |
|     19 | R52                          | -         |     1 | ERJ-1GEF3902C                                             | PANASONIC                                       | 39K                | RESISTOR; 0201; 39K OHM; 1%; 100PPM; 0.05W; THICK FILM 3-LAYER ELECTRODE                                     |
|     20 | R53, R54                     | -         |     2 | CRCW08051M00FK; RC0805FR-071ML                            | VISHAY DALE/YAGEO PHICOMP                       | 1M                 | RESISTOR; 0805; 1M; 1%; 100PPM; 0.125W; THICK FILM                                                           |
|     21 | R56                          | -         |     1 | ERJ-1GEF5601C                                             | PANASONIC                                       | 5.6K               | RESISTOR; 0201; 5.6K OHM; 1%; 100PPM; 0.05W; THICK FILM 3-LAYER ELECTRODE                                    |
|     22 | R60, R61                     | -         |     2 | ERJ-1GEF2202C                                             | PANASONIC                                       | 22K                | RESISTOR; 0201; 22K OHM; 1%; 100PPM; 0.05W; THICK FILM 3-LAYER ELECTRODE                                     |
|     23 | R62                          | -         |     1 | ERJ-1GEF2203C                                             | PANASONIC                                       | 220K               | RESISTOR; 0201; 220K OHM; 1%; 100PPM; 0.05W; THICK FILM 3-LAYER ELECTRODE                                    |
|     24 | U11, U51                     | -         |     2 | MAX14001                                                  | MAXIM                                           | MAX1400 1          | EVKIT PART - IC; MAX14001; PACKAGE OUTLINE DEVICE: 21-0056; PACKAGE CODE AS20-6                              |
|     25 | U12, U52                     | -         |     2 | MAX6006AEUR+                                              | MAXIM                                           | MAX6006 AEUR+      | IC; VREF; 1UA SOT23 PRECISION SHUNT VOLTAGE REFERENCE; SOT23                                                 |
|     26 | U53                          | -         |     1 | MAX44265EWT+                                              | MAXIM                                           | MAX4426 5EWT+      | IC; OPAMP; RAIL-TO-RAIL; 200KHZ OP AMP WITH SHUTDOWN; WLP6 0.9X1.3                                           |
|     27 | X1                           | -         |     1 | TSW-106-08-S-D-RA                                         | SAMTEC                                          | TSW-106- 08-S-D-RA | CONNECTOR; THROUGH HOLE; POST TERMINAL STRIP ASSEMBLY; RIGHT ANGLE; 12PINS;                                  |
|     28 | X2                           | -         |     1 | 1727036                                                   | PHOENIX CONTACT                                 | 1727036            | CONNECTOR; FEMALE; THROUGH HOLE; GREEN PCB TERMINAL BLOCK; STRAIGHT; 4PINS                                   |
|     29 | PCB                          | -         |     1 | MAX14001_DEMO_A                                           | MAXIM                                           | PCB                | PCB:MAX14001_DEMO_A                                                                                          |
|     30 | J1                           | DNP       |     0 | CRCW08050000Z0EAHP                                        | VISHAY DRALORIC                                 | 0                  | RESISTOR; 0805; 0 OHM; 0%; JUMPER; 0.5W; THICK FILM                                                          |
|     31 | J2                           | DNP       |     0 | CRCW06030000ZS; MCR03EZPJ000; ERJ- 3GEY0R00               | VISHAY DALE/ROHM/PANASONIC                      | 0                  | RESISTOR; 0603; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM                                                         |
|     32 | R27                          | DNP       |     0 | ERJ-2RKF6803X                                             | PANASONIC                                       | 680K               | RESISTOR, 0402, 680K OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                    |

NOTE: DNI--&gt; DO NOT INSTALL(PACKOUT) ; DNP--&gt; DO NOT PROCURE

## Ordering Information

| PART         | TYPE              |
|--------------|-------------------|
| MAX14001PMB# | Peripheral Module |

#Denotes RoHS compliant.

## MAX14001PMB

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 3/17            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX14001