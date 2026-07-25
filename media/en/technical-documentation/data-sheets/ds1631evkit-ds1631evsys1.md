<!-- lastmod 2022-08-04 -->
## DS1631 Evaluation System

## General Description

The DS1631 evaluation system (EV system) demonstrates the  DS1631  high-precision  digital  thermometer  and thermostat.  The  DS1631  EV  system  consists  of  the DS1631 evaluation kit (EV kit) and the USB2PMB2 adapter board. Windows XP ®  and Windows ®  7/8/8.1/10-compatible software provides a user-friendly interface that demonstrates the features of the DS1631.

The  DS1631  EV  kit  comes  with the  8-pin  µMAX DS1631AU+ installed.

## Features

- 2 x 6-Pin Pmod™ Compatible Connector (I 2 C)
- Proven PCB Layout
- Fully Assembled and Tested
- Windows XP, Windows 7/8/8.1/10 Compatible Software

## EV System Photo

<!-- image -->

Ordering Information appears at end of data sheet.

Windows and Windows XP are registered trademarks and registered service marks of Microsoft Corporation. Pmod is a trademark of Digilent Inc.

## Quick Start

## Required Equipment

- DS1631 EV system (USB cable included)
- Windows PC
- Voltmeter

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Install the DS1631GUISetup.msi software on your computer.
- 2) Align the X2 connector of the USB2PMB2 with the J1 connector of the DS1631 EV kit.
- 3) Connect the voltmeter between the TOUT and GND test points.
- 4) Connect the USB cable from the PC to the X1 connector of the USB2PMB2 board.
- 5) Open the EV kit GUI, DS1631EVKit.exe (Figure 1).
- 6) Click the Scan Adapters button. Then select the option PMODxxxxxx (where xxxxxx is numeric) and click the Connect button.
- 7) Start evaluating the DS1631 by clicking the Sample Continuously button.

<!-- image -->

Evaluates: DS1631

## DS1631 Evaluation System

## General Description of Software

The main window of the DS1631 EV kit software contains controls to evaluate the DS1631 IC.

## Configuration

The Configuration groupbox  allows  control  of  various DS1631 options such as conversion resolution and time, TOUT  polarity,  and  conversion  mode.  It  also  provides information  about  conversion  status,  EEPROM  activity, and thermostat activity. Select the appropriate controls to enable each feature.

## Resolution

Use the Conversion Resolution drop-down list to select between 9, 10, 11, and 12-bit resolution. The Conversion Time dropdown list allows the user to adjusts the sampling rate for each resolution.

## TOUT Polarity

Check the TOUT Polarity dropdown list for active-high or active-low TOUT.

Figure 1. DS1631 EV Kit Main Window

<!-- image -->

## Conversion Mode

The Conversion Mode dropdown list allows the user to select between continuous and one-shot conversions.

## Address

The DS1631's slave address is determined by the logic state of the A\_ pins. The GUI allows controlling the states of the A\_ pins by selecting the appropriate item within the dropdown list and setting the appropriate bits in the control byte of the I 2 C command.

## Temperature

The  hexadecimal  code  and  the  converted  temperature are displayed within the Register Read/Write groupbox.

Evaluates: DS1631

│

## DS1631 Evaluation System

## Register Read/Write

Within the Register Read/Write groupbox, the user can start  and  stop  conversions,  read  temperature,  access high and low temperature thresholds, and software POR. Press the Start Convert T button when the desired configuration is set.  Press the Stop Convert T button during continuous  conversion  mode.  The Read  Temperature button reads the last converted value in the 2-byte temperature  register.  For  the  temperature  thresholds,  enter in the 2-byte value in hexcadecimal or °C within the TH and TL edit boxes. When the desired values are entered, click the corresponding Write button to the right. Click the Sample Continuously button or One-Shot Read button. Observe the temperature on the History plot.

## Temperature Flags

A  green THF indicator  displays  when  a  measured  temperature  has  not  exceeded  the  value  stored  in  the  TH register  since  power-up.  A  red THF indicator  displays when a measured temperature has been higher than the value stored in the TH register.

A  green TLF indicator  displays  when  a  measured  temperature has not been lower than the value stored in the TL register since power-up. A red TLF indicator displays when a measured temperature has been lower than the value stored in the TL register.

## General Description of Hardware

The  DS1631  EV  system  demonstrates  the  DS1631, high-precision  digital  thermometer  and  thermostat.  The USB2PMB2 module and the EV kit completes the system. The USB2PMB2 act as the master and generates all the I 2 C and I/O communication.

## User-Supplied I 2 C and I/O

To  evaluate  the  EV  kit  with  a  user-supplied  I 2 C  bus, connect a Pmod master module to the J1 connector of the EV kit. If  the  master  does  not  have  a  Pmod-compatible connector,  then  make  connections  directly  to  the  SCL, SDA, A0, A1, and A2 test points.  Make  sure  the  return ground is the same as the DS1631.

## User-Supplied VDD

The  DS1631  is  powered  through  USB  by  default  when a  Pmod-compatible  master  module  is  connected  to  the J1  connector  of  the  EV  kit.  For  a  user-supplied  V DD ,  a Pmod master module is not allowed on the J1 connector. The user will need to apply a voltage between +2.7V and +5.5V at the V DD  test point.

## DS1631 Evaluation System

## DS1631 EV System Bill of Materials

|   ITEM | REF_DES               | DNI/DNP   |   QTY | MFG PART #                                              | MANUFACTURER   | VALUE             | DESCRIPTION                                                                                                                  | COMMENTS   |
|--------|-----------------------|-----------|-------|---------------------------------------------------------|----------------|-------------------|------------------------------------------------------------------------------------------------------------------------------|------------|
|      1 | A0-A2, SCL, SDA, TOUT |           |     6 | 5007                                                    | KEYSTONE       | N/A               | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.35IN; BOARD HOLE = 0.063IN; WHITE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |            |
|      2 | C1                    |           |     1 | GCJ188R71H104KA12; GCM188R71H104K; CGA3E2X7R1H104K080AE | MURATA; TDK    | 0.1UF             | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R; AUTO                             |            |
|      3 | GND                   |           |     1 | 5006                                                    | KEYSTONE       | N/A               | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;       |            |
|      4 | J1                    |           |     1 | TSW-106-08-S-D-RA                                       | SAMTEC         | TSW-106-08-S-D-RA | CONNECTOR; THROUGH HOLE; DOUBLE ROW; RIGHT ANGLE; 12PINS;                                                                    |            |
|      5 | R1, R2                |           |     2 | CRCW06034K70FK                                          | VISHAY DALE    | 4.7K              | RESISTOR; 0603; 4.7K; 1%; 100PPM; 0.10W; THICK FILM                                                                          |            |
|      6 | U1                    |           |     1 | DS1631AU+                                               | MAXIM          | DS1631AU+         | IC; DTHM; HIGH-PRECISION DIGITAL THERMOMETER AND THERMOSTAT; UMAX8                                                           |            |
|      7 | VDD                   |           |     1 | 5005                                                    | KEYSTONE       | N/A               | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;         |            |
|      8 | PCB                   | -         |     1 | MAXDS1631                                               | MAXIM          | PCB               | PCB Board:DS1631 EVALUATION KIT                                                                                              |            |

TOTAL

14

## DS1631 EV System Schematic

<!-- image -->

│

Evaluates: DS1631

## DS1631 Evaluation System

## DS1631 EV System PCB Layout Diagrams

DS1631 EV System-Top Silkscreen

<!-- image -->

DS1631 EV System-Bottom

<!-- image -->

Evaluates: DS1631

DS1631 EV System-Top

<!-- image -->

## Ordering Information

# Denotes RoHS compliant.

| PART          | TYPE          |
|---------------|---------------|
| DS1631EVSYS1# | EV System     |
| DS1631EVKIT#  | EV Kit        |
| USB2PMB2#     | Adapter Board |

│

## DS1631 Evaluation System

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 7/18            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are iPSOieG. 0a[iP ,ntegrateG reserYes the right to Fhange the FirFuitr\ anG sSeFifiFations Zithout notiFe at an\ tiPe.

│

Evaluates: DS1631