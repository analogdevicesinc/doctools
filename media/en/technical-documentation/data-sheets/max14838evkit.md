<!-- lastmod 2022-08-03 -->
## MAX1483 Evalution Kit

## General Description

The MAX14838 evaluation kit (EV kit) is a fully assembled and tested circuit board that evaluates the MAX14838 pinconfigurable industrial sensor output driver.

The MAX14838 EV kit may also be used to evaluate the MAX14839.

## Features

- Operates from a Wide 4.75V to 34V Supply
- Standalone Operation
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## Quick Start

## Recommended Equipment

- MAX14838 EV kit
- 24V, 1A Power Supply
- Mulimeter or voltmeter
- Function/signal generator
- Oscilloscope

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation before exercising the full features of the device:

- 1)  Verify that all jumpers are in their default positions, as shown in Table 1.
- 2)  Connect the 24V DC power supply to VCC and GND test points on the EV kit board.
- 3)  Connect  the  multimeter  to  the  VLDO  and  GND  test points on the EV kit board.
- 4)  Turn on the power supply.
- 5) Verify that the mulitmeter reads 5V on the VLDO pin.
- 5)  Set  the  function/signal  generator  to  generate  a  0-3V 1kHz signal.
- 5)  Remove the J1 jumper.
- 6)  Connect the function/signal generator to the DIN test point. Connect the oscilloscope to the DO test point.
- 6) Verify that DO switches as expected.

Evaluates: MAX1483/MAX14839

## Detailed Description of Hardware

The  MAX14838  EV  kit  is  a  fully  tested  circuit  board demonstrating the capabilities of the MAX14838 industrial binary sensor driver. The EV kit is designed to demonstrate all of the major features of the device.

## Configuring the DO Output

The MAX14838 is a pin-configurable binary sensor driver that can be configured for NPN, PNP , or push-pull operation in a normally-open or normally-closed configuration. Set the NO (J2), PP (J3), and NPN (J5) jumpers high or low to configure the DO output. Table 2 shows the DO configuration settings.

## LDO Linear Regulator

The  MAX14838  features  and  intergrated  5V  low-dropout linear regulator (VLDO) to power external loads up to 30mA.

## LED Output Drivers (LEDS, LED2)

The MAX14838 EV kit includes two on-board LEDs for visual feedback.

The LEDS output (LED1) indicates the state of the DO driver. See Table 2.

The  LED  connected  to  the  LED2  output  (LED2)  is  a general-pupose LED and can be turned on or off with the LED2IN input. Connect the J4 jumper high (1-2) to turn the LED2 output off. Connect the J4 jumper low (1-4) to turn the LED2 output on.

The default connection for the J4 jumper (1-3) connects the LED2IN input to the FAULT output. In this configuration, the LED2 output turns on when FAULT goes low due to an overcurrent or thermal shutdown condition on DO.

<!-- image -->

## Table 1. Jumper Descriptions

| JUMPER   | SHUNT POSITON   | DESCRIPTION                                                                                                                                                             |
|----------|-----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| J1       | 1-2             | DIN is high.                                                                                                                                                            |
| J1       | 2-3*            | DIN is low.                                                                                                                                                             |
| J2       | 1-2             | NO is high.                                                                                                                                                             |
| J2       | 2-3*            | NO is low.                                                                                                                                                              |
| J3       | 1-2             | PP is high.                                                                                                                                                             |
| J3       | 2-3*            | PP is low.                                                                                                                                                              |
| J4       | 1-2             | LED2IN is high. The LED2 LED is off.                                                                                                                                    |
| J4       | 1-3*            | LED2IN is connected to FAULT . In this configuration, the LED2 LED is used a fault indicator. LED2 turns on when an overcurrent or thermal shutdown fault occurs on DO. |
| J4       | 1-4             | LED2IN is high is low. The LED2 LED is turned on.                                                                                                                       |
| J5       | 1-2             | NPN is high.                                                                                                                                                            |
| J5       | 2-3*            | NPN Is low.                                                                                                                                                             |

## Table 2. DO Configuration Settings

| INPUTS   | INPUTS   | INPUTS   | INPUTS   | OPERATION    | OPERATION            | OPERATION   |
|----------|----------|----------|----------|--------------|----------------------|-------------|
| NO       | PP       | NPN      | DIN      | MODE         | DO STATUS            | LEDS        |
| L        | L        | L        | L        | PNP NC       | ON (High)            | ON          |
| L        | L        | L        | H        | PNP NC       | OFF (High Impedance) | OFF         |
| L        | L        | H        | L        | NPN NC       | ON (Low)             | ON          |
| L        | L        | H        | H        | NPN NC       | OFF (High Impedance) | OFF         |
| L        | H        | L        | L        | Push-Pull NH | HIGH                 | ON          |
| L        | H        | L        | H        | Push-Pull NH | LOW                  | OFF         |
| L        | H        | H        | L        | Push-Pull NL | LOW                  | ON          |
| L        | H        | H        | H        | Push-Pull NL | HIGH                 | OFF         |
| H        | L        | L        | L        | PNP NO       | OFF (High Impedance) | OFF         |
| H        | L        | L        | H        | PNP NO       | ON (High)            | ON          |
| H        | L        | H        | L        | NPN NO       | OFF (High Impedance) | OFF         |
| H        | L        | H        | H        | NPN NO       | ON (Low)             | ON          |
| H        | H        | L        | L        | Push-Pull NL | LOW                  | OFF         |
| H        | H        | L        | H        | Push-Pull NL | HIGH                 | ON          |
| H        | H        | H        | L        | Push-Pull NH | HIGH                 | OFF         |
| H        | H        | H        | H        | Push-Pull NH | LOW                  | ON          |

│

Evaluates: MAX14838/MAX14839

## MAX14838 Evalution Kit

## MAX14838 EV Bill of Materials

| PART         |   QTY | DESCRIPTION                                                                                                               |
|--------------|-------|---------------------------------------------------------------------------------------------------------------------------|
| C1, C3       |     2 | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 100V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                               |
| J1-J3, J5    |     4 | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 3PINS; -65 DEGC TO +125 DEGC                                  |
| J4           |     1 | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 4PINS                                                                 |
| LED1         |     1 | DIODE; LED; LY L29K SERIES; SMARTLED; YELLOW; SMT (1608); VF=1.8V; IF=0.02A                                               |
| LED2         |     1 | DIODE; LED; SMART; RED; SMT (0603); PIV=1.8V; IF=0.02A; -40 DEGC TO +100 DEGC                                             |
| R1           |     1 | RESISTOR; 0603; 5K OHM; 0.1%; 25PPM; 0.15W; THIN FILM                                                                     |
| SU1-SU5      |     5 | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; INSULATION=PBT;PHOSPHOR BRONZE CONTACT=GOLD PLATED                   |
| TP1          |     1 | TESTPOINT WITH 1.80MM HOLE DIA, RED, MULTIPURPOSE;                                                                        |
| TP2-TP6, TP8 |     6 | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; WHITE; PHOS- PHOR BRONZE WIRE SILVER PLATE FINISH; |
| TP9-TP11     |     3 | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOS- PHOR BRONZE WIRE SILVER PLATE FINISH; |
| U1           |     1 | IC; DRV; 24V PIN-CONFIGURABLE INDUSTRIAL SENSOR OUTPUT DRIVERS; TDFN12-EP                                                 |
| C4           |     0 | PACKAGE OUTLINE 0603 NON-POLAR CAPACITOR                                                                                  |
| PCB          |     1 | PCB Board:MAX14838 EVALUATION KIT                                                                                         |

│

Evaluates: MAX14838/MAX14839

## MAX14838 EV PCB Layout

MAX14838 EV Top Silkscreen

<!-- image -->

MAX14838 EV Top

MAX14838 EV Bottom

│

## MAX14838 EV Schematic

<!-- image -->

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX14838EVKIT# | EV Kit |

#Denotes RoHS compliant.

## MAX14838 Evalution Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 8/16            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are iPSlied. 0a[iP Integrated reserYes the right to change the circuitr\ and sSecifications Zithout notice at an\ tiPe.

│

Evaluates: MAX14838/MAX14839