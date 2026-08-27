<!-- lastmod 2022-08-02 -->
## MAX2223 Evaluation Kit

## General Description

The MAX2223 evaluation kit (EV kit) simplifies evaluation of  the  MAX2223.  The  MAX2223  is  a  low-cost,  directconversion tuner IC designed for satellite set-top and Very Small Aperture Terminal (VSAT) applications. The device directly converts the satellite signals from the LNB to baseband using a broadband I/Q down-converter. The operating frequency range extends from 925MHz to 2175MHz. The device supports an RF bandwidth of 1GHz.

This EV kit is a complete broadband satellite tuner DVBS2 RF front-end solution. It enables testing of the device performance and requires no additional support circuitry. Standard 50Ω SMA connectors are included on the EV kit for the inputs and outputs to allow for quick and easy evaluation on the lab bench. The MAX2223 evaluation kit contains a microcontroller (MCU) that uses a 2-wire I 2 Ccompatible serial interface to configure internal registers and  modes. A  Graphical  User  Interface  (GUI)  software running  on  a  computer  connected  via  USB  makes  it simple to program and control the device operation. The evaluation kit is fully assembled and tested at the factory.

This document provides a bill of materials, a list of equipment required  to  evaluate  the  device,  a  straightforward  test procedure to verify functionality, a description of the EV kit circuit, the circuit schematic, and artwork for each layer of the printed circuit board (PCB).

## Features

- Easy Evaluation of the MAX2223 IC
- Single 3.3V ± 5% Supply for IC
- On-Board 5V ± 5% DAC for Gain Control
- 925MHz to 2175MHz Operating Frequency Range
- 50Ω SMA Connectors for the RF Ports and the Baseband Outputs
- All Critical Peripheral Components Included
- Micro USB Port for Interfacing with a PC
- PC Control Software (Available at www.maximintegrated.com/evkitsoftware )

Ordering Information appears at end of data sheet.

<!-- image -->

Evaluates: MAX2223

## Quick Start

## Required Equipment

This  section  lists  the  recommended  test  equipment  to verify operation of the MAX2223. It is intended as a guide only and some substitutions are possible.

- One RF signal generator capable of delivering minimum -75dBm up to 3.0GHz (Keysight N5182B or equivalent)
- An RF spectrum analyzer with a range of 100kHz to 3.0GHz (Keysight N9020A or equivalent)
- A dual power supply capable of up to 250mA at 3.3V ±5% on one channel,15mA at 5V ±5% on the other.
- One digital multi-meter for measuring the supply current (Keysight 34461A or equivalent) (optional).
- 50Ω coaxial RF cables with SMA connectors.
- A user-supplied Windows 10 based PC.

## Procedure

This  section  provides  a  step-by-step  guide  to  operating the  EV  kit  and  testing  the  device  functions.  The  EV  kit is  fully  assembled and tested. Follow the instructions in the  Connections  and  Setup  section  for  proper  device evaluation.

Caution: Do not turn on the DC power or RF signal generators until all connections are completed.

## Detailed Description of Hardware and Software

The EV kit hosts a MAX32625 microcontroller platform, and  also  a  MAX515  serial  10-Bit  DAC  along  with  the MAX2223. The purpose of microcontroller is to program the registers of MAX2223 and the DAC. The DAC is used to generate an on-board analog RF gain control voltage.

## Measurement Considerations

The  EV  kit  includes  on-board  matching  circuitry  at  the MAX2223 RF input to convert the 50Ω source to a 75Ω IC input. Note that the input power to the device must be adjusted to account for the 6dB power loss of the matching resistor network.

## Download the MAX2223 EV Kit Software

- Download the MAX2223 EV kit software from the link, run the installation file and install it.
- Run the MAX2223 EV kit software through the desktop icon to open the GUI.

Note that the GUI will only run on Window 10 PCs.

## Powering and Connecting the EV Kit

- Verify that all jumpers are in place. Jumper VCC\_ VCO should be shorted. J2 should be shorted if one wants to use the on-board DAC to control the RF gain. In this case, one should not apply any voltage on the EXT\_GC pin. Pins 2-3 of J5 should be connected for default addressing.
- With its output disabled, connect a 3.3V power supply to the VCC and GND test points through an ammeter. If available, set the current limit to 200mA. One should account for the IR voltage drop through the ammeter and adjust the power supply to get 3.3V at the EV kit power supply test pins.
- If using an external power supply to provide the RF gain control voltage (V GC1 ), then also connect a power supply between the EXT\_GC and GND pins of the EV kit. Set the gain control voltage to 0.5V, but leave the supply powered off for now.
- Connect the MAX2223 EV kit to the PC running the GUI through the USB cable, and power on the EV kit (apply +3.3V power supply to the VCC and GND test points). A green LED on the MCU module should be blinking green about once per second. It will occasionally change momentarily to a blue color but will be blinking green most of the time.
- Double-click on the Max2223 EVKIT GUI.exe icon which will be on the desktop in order to start the GUI. One should see that the EV kit is connected by the Connected message at the bottom-right corner of the GUI display. See Figure 1.
- After opening the GUI, there are two tabs: Block Diagram and Register View. The block diagram shows a block diagram of the IC. One can change various widgets such as the LO Frequency, and the corresponding registers will be automatically updated. The Register View allows one to read and write the register contents directly.
- The default LO frequency is 950MHz. After inputting a new value, press either the Tab key or the Enter key for the new value to take effect. Note that in the initial state, the PLL Lock box is not illuminated. This test procedure assumes the LO frequency is left at 950MHz.
- To see the lock status of the PLL, simply left mouse click on the PLL Lock box in order to enable it.  A check mark will appear in the box if it is enabled.  If everything is functioning normally, one should see the GUI change to resemble Figure 1. Note that the PLL Lock widget is now illuminated green and one of

## MAX2223 Evaluation Kit

the four green bars in the center of the strip of ADC lock status indicators should be illuminated. The supply current from the 3.3V V CC  supply should read approximately 135mA.

- Using the Register View tab, program register 0x9 to have a value of 0x05.
- With its output disabled, set the RF signal generator to a 955MHz frequency at -69dBm to account for the 6dB resistive pad loss. When measuring noise figure, this 6dB must also be accounted for by subtracting 6dB from the measured noise figure.
- Connect the output of the RF signal generator to the SMA connector labeled RF\_IN on the EV kit.
- Connect one IF output among the four (IOUT+/ IOUT-/QOUT/QOUT-) to a spectrum analyzer.
- Terminate the opposite polarity with a 50 Ω SMA terminator (e.g., if observing IOUT+, terminate IOUT-).
- Enable the output of the RF signal generator.
- Observe the baseband output at 5MHz with a tone power of about -14dBm on spectrum analyzer.

Evaluates: MAX2223

Figure 1. GUI View

<!-- image -->

NOTE: The RF gain control voltage (V GC1 ) can be set either by an external power supply or by using a DAC on the EV kit. If the onboard DAC is selected, then the voltage is set through the GC1 widget of the GUI Block Diagram window. Simply type in the desired voltage between 0.5V and 2.7V and hit Enter. It is recommended to probe the actual GC1 voltage with a multimeter and make small adjustments to the programmed voltage to compensate for any offsets that may exist.

## Layout Issues

A good PCB is an essential part of an RF circuit design. The  EV  kit  PCB  can  serve  as  a  guide  for  laying  out  a board using the devices. Keep traces carrying RF signals as short as possible to minimize radiation and insertion loss. Use impedance control on all RF signal traces. The exposed paddle must be soldered evenly to the board's ground plane for proper operation. Use abundant throughputs

## Component Suppliers

| SUPPLIER                  | WEBSITE                    |
|---------------------------|----------------------------|
| Murata Mfg. Co., Ltd.     | www.murata.com             |
| Kemet Electronics Pvt Ltd | www.kemet.com              |
| Citizen America Corp.     | www.citizencrystal.com     |
| Keystone Electronics Corp | www.keyelco.com            |
| Sullins Electronics Corp. | www.sullinselectronics.com |
| Maxim Integrated          | www.maximintegrated.com    |

beneath the exposed paddle and between RF traces to minimize  undesired  RF  coupling.  To  minimize  coupling between different sections of the IC, each VCC pin must have a bypass capacitor with low impedance to the closest ground at the frequency of interest. Do not share ground vias  among  multiple  connections  to  the  PCB  ground plane. Refer to the Layout Considerations section of the MAX2223 IC data sheet for more information

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX2223EVKIT# | EV Kit |

# Denotes RoHS-compliant.

## MAX2223 EV Kit Bill of Materials

|   ITEM | REF_DES                    | DNI/DNP   |   QTY | MFG PART #                                                                                                              | MANUFACTURER                                 | VALUE                     | DESCRIPTION                                                                                                             | COMMENTS                  |
|--------|----------------------------|-----------|-------|-------------------------------------------------------------------------------------------------------------------------|----------------------------------------------|---------------------------|-------------------------------------------------------------------------------------------------------------------------|---------------------------|
|      1 | 5V, EXT_GC                 | -         |     2 | 5005 KEYSTONE                                                                                                           | 5005 KEYSTONE                                | N/A                       | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;    |                           |
|      2 | C1                         | -         |     1 | C1005C0G1H330J050BA; GRM1555C1H330JA01                                                                                  | TDK;MURATA                                   | 33PF                      | CAPACITOR; SMT; 0402; CERAMIC; 33pF; 50V; 5%; C0G; -55degC to + 125degC; 0 +/-30PPM/degC                                |                           |
|      3 | C2                         | -         |     1 | C0402X7R500-222KNE; GRM155R71H222KA01                                                                                   | VENKEL LTD.;MURATA                           | 2200PF                    | CAPACITOR; SMT (0402); CERAMIC CHIP; 2200PF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                             |                           |
|      4 | C3                         | -         |     1 | C0402C333K4RAC                                                                                                          | KEMET                                        | 0.033UF                   | CAPACITOR; SMT; 0402; CERAMIC; 0.033uF; 16V; 10%; X7R; -55degC to + 125degC; 0 +/-15% degC                              |                           |
|      5 | C4                         | -         |     1 | ECJ-0EB1H101K; CC0402KRX7R9BB101                                                                                        | PANASONIC;YAGEO PHYCOMP                      | 100PF                     | CAPACITOR; SMT (0402); CERAMIC CHIP; 100PF; 50V; TOL=10%; MODEL=ECJ SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R            |                           |
|      6 | C5, C12, C19, C21, C25     | -         |     5 | CGA2B3X7R1H104K050BB; C1005X7R1H104K050BB; GRM155R71H104KE14; GCM155R71H104KE02; C1005X7R1H104K050BE; UMK105B7104KV-FR; | TDK;TDK;MURATA;MURATA; TDK;TAIYO YUDEN;TDK   | 0.1UF                     | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                              |                           |
|      7 | C6, C22                    | -         |     2 | GRM155R60J106ME44; GRM155R60J106ME47; C1005X5R0J106M050BC; CL05A106MQ5NUN; C0402C106M9PAC                               | MURATA;MURATA;TDK; SAMSUNG ELECTRONICS;KEMET | 10UF                      | CAPACITOR; SMT (0402); CERAMIC CHIP; 10UF; 6.3V; TOL=20%; TG=-55 DEGC TO +85 DEGC; TC=X5R                               |                           |
|      8 | C8-C11, C13, C14, C16, C26 | -         |     8 | GRM155R71H102JA01                                                                                                       | MURATA                                       | 1000PF                    | CAPACITOR; SMT (0402); CERAMIC CHIP; 1000PF; 50V; TOL=5%; MODEL=GRM SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R            |                           |
|      9 | C15, C18                   | -         |     2 | C1005X7R1E473K050BC; GRM155R71E473K; GCM155R71E473KA55                                                                  | TDK;MURATA;MURATA                            | 0.047UF                   | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.047UF; 25V; TOL=10%; TG=-55 DEGC TO +125 DEGC                                    |                           |
|     10 | C23, C24                   | -         |     2 | C0402C103K5RAC; GRM155R71H103KA88; C1005X7R1H103K050BE; CL05B103KB5NNN                                                  | KEMET;MURATA;TDK; SAMSUNG ELECTRONIC         | 0.01UF                    | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.01UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                             |                           |
|     11 | C34-C37                    | -         |     4 | C1005X7R1H473K; CGA2B3X7R1H473K050BB; GCM155R71H473KE02                                                                 | TDK;TDK;MURATA                               | 0.047UF                   | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.047UF; 50V; TOL=10%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X7R                    |                           |
|     12 | CPOUT                      | -         |     1 | 5000                                                                                                                    | KEYSTONE                                     | N/A                       | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;        |                           |
|     13 | GND, GND2, TP1             | -         |     3 | 5011                                                                                                                    | KEYSTONE                                     | N/A                       | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |                           |
|     14 | IOUT+, IOUT-, QOUT+, QOUT- | -         |     4 | 142-0701-201                                                                                                            | JOHNSON COMPONENTS                           | 142-0701-201              | CONNECTOR; FEMALE THREADED; THROUGH HOLE; SMA; STRAIGHT THROUGH; 5PINS                                                  |                           |
|     15 | J1-J3, VCO                 | -         |     4 | PEC02SAAN                                                                                                               | SULLINS                                      | PEC02SAAN                 | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                               |                           |
|     16 | J5                         | -         |     1 | PBC03SAAN                                                                                                               | SULLINS                                      | PBC03SAAN                 | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS; - 65 DEGC TO +125 DEGC                                       |                           |
|     17 | MH1-MH4                    | -         |     4 | 9032                                                                                                                    | KEYSTONE                                     |                           | 9032 MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                          |                           |
|     18 | R1                         | -         |     1 | VISHAY DALE                                                                                                             | VISHAY DALE                                  | RESISTOR; 0402; 43.2 OHM; | RESISTOR; 0402; 43.2 OHM;                                                                                               | RESISTOR; 0402; 43.2 OHM; |
|        |                            |           |       | CRCW040243R2FK                                                                                                          |                                              | 43.2                      | 1%; 100PPM; 0.0625W; THICK FILM                                                                                         |                           |
|     19 | R2                         | -         |     1 | CRCW040286R6FK                                                                                                          | VISHAY DALE                                  |                           | 86.6 RESISTOR; 0402; 86.6 OHM; 1%; 100PPM; 0.0625W; THICK FILM                                                          |                           |

## MAX2223 EV Kit Bill of Materials (continued)

| ITEM   | REF_DES                | DNI/DNP   |   QTY | MFG PART #                                    | MANUFACTURER                          | VALUE        | DESCRIPTION                                                                                                                                                                      | COMMENTS   |
|--------|------------------------|-----------|-------|-----------------------------------------------|---------------------------------------|--------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------|
| 21     | R4                     | -         |     1 | CRCW0402390RFK                                | VISHAY DALE                           | 390          | RESISTOR, 0402, 390 OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                                                                                         |            |
| 22     | R5, R10                | -         |     2 | CRCW04021K00FK; RC0402FR-071KL; MCR01MZPF1001 | VISHAY DALE;YAGEO PHICOMP; ROHMSEMI   | 1K           | RESISTOR; 0402; 1K; 1%; 100PPM; 0.0625W; THICK FILM                                                                                                                              |            |
| 23     | R6, R7                 | -         |     2 | ERJ-2RKF4701                                  | PANASONIC                             | 4.7K         | RESISTOR; 0402; 4.7K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                          |            |
| 24     | R8                     | -         |     1 | ERJ-2GE0R00                                   | PANASONIC                             |              | 0 RESISTOR; 0402; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM                                                                                                                           |            |
| 25     | R9                     | -         |     1 | CRCW04021K50FK                                | VISHAY DALE                           | 1.5K         | RESISTOR, 0402, 1.5K OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                                                                                        |            |
| 26     | R11                    | -         |     1 | ERJ-2RKF1004                                  | PANASONIC                             | 1M           | RESISTOR; 0402; 1M OHM;1%; 100PPM; 0.10W; THICK FILM                                                                                                                             |            |
| 27     | REF_IN, REF_OUT, RF_IN | -         |     3 | 142-0701-801                                  | JOHNSON COMPONENTS                    | 142-0701-801 | CONNECTOR; FEMALE; BOARDMOUNT; END LAUNCH JACK RECEPTACLE- ROUND CONTACT; STRAIGHT; 2PINS                                                                                        |            |
| 28     | SU1-SU5                | -         |     5 | S1100-B;SX1100-B; STC02SYAN                   | KYCON;KYCON;SULLINS ELECTRONICS CORP. | SX1100-B     | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; INSULATION=PBT;PHOSPHOR BRONZE CONTACT=GOLD PLATED                                                                          |            |
| 29     | U1                     | -         |     1 | MAX2223ETI+                                   | MAXIM                                 | MAX2223ETI+  | EVKIT PART-IC; MAX2223ETI+; WG28 - COMPLETE DIRECT- CONVERSION L-BAND TUNER; TQFN28- EP; PACKAGE OUTLINE DRAWING: 21- 0140; PACKAGE CODE: T2855+3; PACKAGE LAND PATTERN: 90-0023 |            |
| 30     | U2                     | -         |     1 | MAX32625PICO                                  | MAXIM                                 | MAX32625PICO | MODULE; BOARD; MAX32625PICO BOARD DESIGN FOR MAX32625 ARMCORTEX-M4F; BOARD; LAMINATED PLASTIC WITH COPPER CLAD;                                                                  |            |
| 31     | U3                     | -         |     1 | MAX515ESA+                                    | MAXIM                                 | MAX515ESA+   | IC; DAC; 5V LOW-POWER VOLTAGE-OUTPUT SERIAL 10-BIT DIGITAL-TO-ANALOG CONVERTER; NSOIC8                                                                                           |            |
| 32     | VCC                    | -         |     1 |                                               | 5010 KEYSTONE                         | N/A          | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SIL;                                                                            |            |
| 33     | Y1                     | -         |     1 | HCM49-27.000MABJ-UT                           | CITIZEN                               | 27MHZ        | CRYSTAL; SMT; 10PF; 27MHZ; +/-30PPM; +/-5PPM                                                                                                                                     |            |
| 34     | PCB                    | -         |     1 | MAX2223                                       | MAXIM                                 | PCB          | PCB:MAX2223                                                                                                                                                                      |            |
| 35     | KIT1                   | DNI       |     1 | MAX32625PICO                                  | MAXIM                                 | MAX32625PICO | MODULE; BOARD; MAX32625PICO BOARD DESIGN FOR MAX32625 ARMCORTEX-M4F; BOARD; LAMINATED PLASTIC WITH COPPER CLAD;                                                                  |            |
| 36     | C17                    | DNP       |     0 | GRM155R71H102JA01                             | MURATA                                | 1000PF       | CAPACITOR; SMT (0402); CERAMIC CHIP; 1000PF; 50V; TOL=5%; MODEL=GRM SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                     |            |
| 37     | C7, C20                | DNP       |     0 | N/A                                           | N/A                                   | OPEN         | PACKAGE OUTLINE 0402 NON-POLAR CAPACITOR                                                                                                                                         |            |
| 38     | RL                     | DNP       |     0 | N/A                                           | N/A                                   | OPEN         | PACKAGE OUTLINE 0402 RESISTOR                                                                                                                                                    |            |
| TOTAL  |                        |           |    72 |                                               |                                       |              |                                                                                                                                                                                  |            |

## MAX2223 EV Kit Schematic

<!-- image -->

│

Evaluates: MAX2223

## MAX2223 EV Kit PCB Layout Diagrams

MAX2223 EV Kit-Top Silkscreen

<!-- image -->

MAX2223 EV Kit-Top

<!-- image -->

Evaluates: MAX2223

MAX2223 EV Kit-Layer 2

<!-- image -->

MAX2223 EV Kit-Layer 3

<!-- image -->

│

## MAX2223 EV Kit PCB Layout Diagrams (continued)

MAX2223 EV Kit-Bottom

<!-- image -->

MAX2223 EV Kit-Bottom Silkscreen

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 8/19            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim ,ntegrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX2223