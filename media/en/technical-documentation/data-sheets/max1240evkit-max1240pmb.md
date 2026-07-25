<!-- lastmod 2022-08-05 -->
## MAX1240 Evaluation Kit

## General Description

The  MAX1240  evaluation  kit  (EV  kit)  demonstrates  the MAX1240, low-power, 12-bit serial ADC. The MAX1240 peripheral  module  (Pmod™)  and  the  USB2PMB2  module form a system, the MAX1240 EV kit. Windows XP, and Windows ®   7/8/8.1/10-compatible  software  provides  a user friendly interface that demonstrates features of the MAX1240.

The MAX1240 peripheral module comes installed with the 8-pin SO package, MAX1240ACSA++.

## Features

- 6-Pin PMod-Compatible Connector SPI)
- On-Board Voltage Reference (MAX6126)
- Proven PCB Layout
- Fully Assembled and Tested
- Windows XP, Windows 7/8/8.1/10-Compatible Software

## MAX1240 EV Kit Photo

<!-- image -->

Windows are registered trademarks and registered service marks of Microsoft Corporation.

Pmod is a trademark of Digilent Inc.

## Quick Start

## Required Equipment

- MAX1240 EV kit (includes MAX1240PMB and USB2PMB2 module with micro-USB cable)
- Signal Source
- Windows PC

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from the EV kit software. Text in bold and underlined refers to items from the Windows operating system.

Ordering Information appears at end of data sheet.

<!-- image -->

## MAX1240 Evaluation Kit

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Visit http://www.maximintegrated.com/en/design/ tools/applications/evkit-software/ to download the latest version of the EV kit software, MAX1240EVKit. zip. Save the EV kit software to a temporary folder and uncompress the ZIP file.
- 2) Align the X2 top row connector of the USB2PMB2 with the J1 connector of the MAX1240 Pmod.
- 3) Verify that shunts are in the default position as shown in Table 1.
- 4) Connect the USB cable from the PC to the USB2PMB2 board.
- 5) Open the GUI, MAX1240EVKit.exe (Figure 1).
- 6) Click the Scan Adapters button. Then select the option PMODxxxxxx (where xxxxxx is numeric) and click the Connect button.
- 7) Connect the a signal source between 0V and 2.5V at the AIN test point.
- 8) Start evaluating the MAX1240 by clicking on the Sample Continuously button.

## Table 1. Jumper Descriptions

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                                                                   |
|----------|------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|
| JU1      | Not installed*   | Internal reference when using SHDN pin. External reference when SHDN pin is unconnected. Disconnects MAX6126 from the REF pin of the MAX1240. |
| JU1      | Installed        | External reference only. Connects MAX6126 to the REF pin of the MAX1240.                                                                      |
| JU2      | 1-2*             | Connects SHDN pin of MAX1240 to VDD for normal operation.                                                                                     |
| JU2      | 1-3              | Connects SHDN pin of MAX1240 to GND to place part into shutdown.                                                                              |
| JU2      | Not Installed    | SHDN pin of MAX1240 is unconnected to allow external reference                                                                                |

## Evaluates: MAX1240, MAX1241

## General Description of Software

The  main  window  of  the  MAX1240  peripheral  module contains  controls  to  evaluate  the  MAX1240  IC.  The peripheral  module  GUI  allows  different  sample  sizes, adjustable sampling rates, internal or external reference options, and graphing that includes ADC count, voltage, FFT, and histogram of the sampled signal.

## Device Setting

The Device Setting groupbox is mainly used for changing the voltage reference. Select between the MAX1240 and MAX1241, and entered in the appropriate voltage in the VREF edit box. Please see User-Supplied REF section.

## Sampling

The Sample groupbox allows for a single or continuous sample. It also features adjusting the sampling rate and sampling up to 16384 samples. The Scope captures data in ADC Counts , Voltage(V) , FFT , and Histogram graphing options.

│

Figure 1. 1240 EV Kit Main Window

<!-- image -->

## General Description of Hardware

The  MAX1240  EV  kit  demonstrate  the  12-bit  ADC  with 2.5V  internal  reference.  The  USB2PMB2  module  and  the MAX1240  Pmod  completes  the  system.  The  USB2PMB2 act as the master and generates all the SPI communications.

## User-Supplied SPI

To evaluate the EV kit with a user-supplied SPI bus, the connector  J1  is  a  compatible  PMod  connector.  If  the master does not have a compatible PMod connector, then make connection directly to the SCLK, CSB, DOUT, and GND test points.

## Ordering Information

# Denotes RoHS compliant.

| PART          | TYPE              |
|---------------|-------------------|
| MAX1240EVKIT# | EV KIT            |
| MAX1240PMB#   | Peripheral Module |
| USB2PMB2#     | Adapter Board     |

## User-Supplied VDD

The MAX1240 is powered through USB and regulated to 3.3V by default when a PMod compatible master module is connected to the J1 connector of the EV kit. For a usersupplied VDD, a PMod master module is not allowed on the J1 connector. The user will need to apply a voltage between +2.7V and +3.6V at the VDD test point.

## User-Supplied REF

The internal reference is set at 2.5V. The MAX1240PMB comes with an on-board MAX6126, 2.048V reference. To use this feature, a shunt on JU1 header must be installed. In  order  to  use  other  external  reference  option,  do  not place shunt on header JU2 and apply 1V to VDD + 50mV to REF test point.

│

## MAX1240 EV Kit Bill of Materials

| ITEM   |   QTY | REF DES                               | MFG PART #                                                              | MANUFACTURER                         | VALUE          | DESCRIPTION                                                                                                                                                                        | COMMENTS   |
|--------|-------|---------------------------------------|-------------------------------------------------------------------------|--------------------------------------|----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------|
| 1      |     7 | AIN, CSB, REF, VDD, DOUT, SCLK, SHDNB | 5010 KEYSTONE                                                           | 5010 KEYSTONE                        | N/A            | TESTPOINT WITH 1.80MM HOLE DIA, RED, MULTIPURPOSE; NOT FOR COLD TEST                                                                                                               |            |
| 2      |     4 | C1, C4, C6, C7                        | C0603C104K5RAC; C1608X7R1H104K                                          | KEMET; TDK                           | 0.1UF          | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R;NOTE: NOT RECOMMENDED FOR NEW DESIGN USE 20-000u1-01                                    |            |
| 3      |     2 | C2, C3                                | C1608X5R0J475M080AB; GRM188R60J475ME19; JMK107BJ475MA-T                 | TDK/MURATA/TAIYO YUDEN               | 4.7UF          | CAPACITOR; SMT (0603); CERAMIC; 4.7UF; 6.3V; TOL=20%; MODEL=C SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R                                                                              |            |
| 4      |     1 | C5                                    | UMK107BJ105KA-T; C1608X5R1H105K080AB; CL10A105KB8NNN; GRM188R61H105KAAL | TAIYO YUDEN; TDK; SAMSUNG; MURATA    | 1UF            | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 50V; TOL=10%; MODEL=_MK SERIES; TG=-55 DEGC TO +85 DEGC                                                                                  |            |
| 5      |     1 | GND                                   | 5011                                                                    | KEYSTONE                             | N/A            | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN; NOT FOR COLD TEST |            |
| 6      |     1 | J1                                    | PBC06SBAN                                                               | SULLINS ELECTRONICS CORP.            | PBC06SBAN      | EVKIT PART-CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; RIGHT ANGLE; 6PINS; NOTE: RE-ARRANGED PIN SEQUENCE; PIN 1 ON THE RIGHT                                                        |            |
| 7      |     1 | JU1                                   | PEC02SAAN                                                               | SULLINS                              | PEC02SAAN      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                                                                                          |            |
| 8      |     1 | JU2                                   | PEC03SAAN                                                               | SULLINS                              | PEC03SAAN      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                                                                                          |            |
| 9      |     1 | R1                                    | RC1608J000CS; CR0603-J/-000ELF; RC0603JR-070RL                          | SAMSUNG ELECTRONICS/ BOURNS/YAGEO PH | 0              | RESISTOR; 0603; 0 OHM; 5%; JUMPER; 0.10W; THICK FILM                                                                                                                               |            |
| 10     |     1 | U1                                    | MAX1240BESA/V+                                                          | MAXIM                                | MAX1240BESA/V+ | IC; ADC; +2.7V; LOWER-POWER; 12-BIT SERIAL ADC; NSOIC8                                                                                                                             |            |
| 11     |     1 | U2                                    | MAX6126A21+                                                             | MAXIM                                | MAX6126A21+    | IC; VREF; ULTRA-HIGH PRECISION; ULTRA-LOW NOISE; SERIES VOLTAGE REFERENCE; UMAX8                                                                                                   |            |
| TOTAL  |    21 |                                       |                                                                         |                                      |                |                                                                                                                                                                                    |            |

Evaluates: MAX1240, MAX1241

## MAX1240PMB Schematic

<!-- image -->

## MAX1240 EV Kit Layout Diagrams

MAX1240 EV Kit-Top Silkscreen

<!-- image -->

MAX1240 EV Kit-Top

<!-- image -->

MAX1240 EV Kit-Layer 2

<!-- image -->

│

## MAX1240 EV Kit Layout Diagrams (continued)

MAX1240 EV Kit-Layer 3

<!-- image -->

MAX1240 EV Kit-Bottom

<!-- image -->

│

## MAX1240 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                        | PAGES CHANGED   |
|-------------------|-----------------|------------------------------------|-----------------|
|                 0 | 12/17           | Initial release                    | -               |
|                 1 | 2/18            | Updated Ordering Information table | 3               |
|                 2 | 3/18            | Updated references to USB2PMB2     | 1-8             |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. 0a[im InteJrated reserYes the riJht to chanJe the circuitr\ and specifications without notice at an\ time.

<!-- image -->

│

Evaluates: MAX1240, MAX1241