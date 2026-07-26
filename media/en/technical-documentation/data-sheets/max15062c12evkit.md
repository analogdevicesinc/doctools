<!-- lastmod 2022-08-02 -->
## MAX15062C 12V Evaluation Kit

## General Description

The  MAX15062C  12V  evaluation  kit  (EV  kit)  is  a  fully assembled and tested circuit board that demonstrates the performance of the MAX15062C 60V, 300mA ultra-small, high-efficiency,  synchronous  step-down  converter.  The EV kit operates over a wide input voltage range of 14V to  60V,  and  provides  up  to  300mA  load  current  at  12V output voltage. The device features undervoltage lockout, overcurrent protection, and thermal shutdown. The EV kit switches at a frequency of 500kHz, and delivers a peak efficiency of 95% with the supplied components.

The  EV  kit  comes  installed  with  the  MAX15062CATA+ in an 8-pin (2mm x 2mm) lead(Pb)-free/RoHS-compliant TDFN package.

## Features and Benefits

- 14V to 60V Input Voltage Range
- 12V Output, 300mA Continuous Current
- Internal Compensation
- EN/UVLO for On/Off Control and Programmable Input Undervoltage Lockout
- 95% Peak Efficiency
- 500kHz Switching Frequency
- PFM or Forced-PWM Mode of Operation
- Hiccup Mode Overcurrent Protection
- Open-Drain RESET Output
- Thermal Shutdown
- Lead-Free, 8-Pin, 2mm x 2mm TDFN Package
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## Evaluates: MAX15062C in 12V Output-Voltage Application

## Quick Start

## Recommended Equipment

- MAX15062C 12V EV kit
- 60V adjustable, 0.5A DC power supply
- Electronic load up to 300mA
- Voltmeter

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Verify that shunts are installed on jumpers JU1, JU2 (EN/UVLO).
- 2) Verify  that  jumper  JU3  (MODE-PFM  operation)  is open.
- 3) Set  the  electronic  load  to  constant-current  mode, 300mA, and disable the electronic load.
- 4) Connect the electronic load's positive terminal to the VOUT PCB pad. Connect the negative terminal to the GND PCB pad.
- 5) Connect  the  voltmeter  across  the  VOUT  and  GND PCB pads.
- 6) Set the power-supply output to 24V. Disable the power supply.
- 7) Connect the 24V power-supply output to the VIN PCB pad. Connect the supply ground to the GND PCB pad.
- 8) Turn on the power supply.
- 9) Enable the electronic load and verify that output voltage is at 12V with respect to GND.
- 10)  Vary the input voltage from 14V to 60V.
- 11)  Vary the load current from 1mA to 100mA and verify that output voltage is 12V.

<!-- image -->

## MAX15062C 12V Evaluation Kit

## Detailed Description

The  MAX15062C  12V  evaluation  kit  (EV  kit)  is  a  fully assembled and tested circuit board that demonstrates the performance of the MAX15062C 60V, 300mA ultra-small, high-efficiency,  synchronous  step-down  converter.  The EV kit operates over a wide input voltage range of 14V to  60V,  and  provides  up  to  300mA  load  current  at  12V output voltage. The device features undervoltage lockout, overcurrent protection, and thermal shutdown. The EV kit switches at a frequency of 500kHz, and delivers a peak efficiency of 95% with the supplied components.

The EV kit includes an EN/UVLO PCB pad and jumpers JU1, JU2 to enable control of the converter output. The MODE PCB pad and jumper JU3 are provided for selecting  the  mode  of  operation  of  the  converter.  The  VCC PCB  pad  helps  measure  the  internal  LDO  voltage.  An additional RESET PCB pad is available for monitoring the open-drain logic output.

The EV kit output voltage can be configured to 15V by installing  the  resistor  R6  and  the  inductor  L1  (alternate) which comes along with the EV kit.

## Enable Control (JU1, JU2)

The  EN/UVLO  pin  on  the  device  serves  as  an  on/off control while also allowing the user to program the input

## Table 1. Enable Control (EN/UVLO) (JU1, JU2)

| SHUNT POSITION   | SHUNT POSITION   | EN/UVLO PIN                                      |                      |
|------------------|------------------|--------------------------------------------------|----------------------|
| JU1              | JU2              |                                                  | VOUT OUTPUT          |
| 1-2              | Open             | Connected to VIN                                 | Enabled              |
| Open             | 1-2              | Connected to GND                                 | Disabled             |
| 1-2*             | 1-2              | Connected to midpoint of R1, R2 resistor-divider | Enabled at VIN ≥ 13V |

## Table 2. MODE Control

| SHUNT POSITION   | MODE PIN         | MODE OF OPERATION   |
|------------------|------------------|---------------------|
| 1-2              | Connected to GND | Forced PWM          |
| Open*            | Unconnected      | PFM                 |

## Evaluates: MAX15062C in 12V Output-Voltage Application

undervoltage-lockout  (UVLO)  threshold.  Jumpers  JU1 and JU2 configure the EV kit's output for turn-on/turn-off control.  Install  a  shunt  across  jumper  JU2  pins  1-2  to disable VOUT. See Table 1 for proper JU1, JU2 jumper configurations.

Additionally, resistors R1 and R2 are included to set the UVLO to a desired turn-on voltage. Refer to the Enable Input (EN/UVLO), Soft-Start section in the MAX15062 IC data sheet for additional information on setting the UVLO threshold voltage.

## Active-Low, Open-Drain Reset Output ( RESET )

The EV kit provides a PCB pad to monitor the status of the RESET output. RESET goes  high  2ms  after  VOUT rises above 95% (typ) of its nominal regulated output voltage. RESET goes low when VOUT falls below 92% (typ) of its nominal regulated voltage.

## PFM or Forced-PWM Mode (MODE)

The  EV  kit  includes  a  jumper  (JU3)  to  program  the mode of operation of the converter. Install a shunt across JU3 before powering up the EV kit to enable the forcedPWM operation. Keep JU3 open to enable the light-load PFM  operation.  See  Table  2  for  proper  JU3  jumper configurations.

│

## EV Kit Performance Report

<!-- image -->

│

## 12V Output-Voltage Application

FREQUENCY (Hz)

## MAX15062C 12V Evaluation Kit

## Component List

| DESIGNATION    |   QTY | DESCRIPTION                                                             |
|----------------|-------|-------------------------------------------------------------------------|
| C1             |     1 | 22µF, 100V electrolytic capacitor (8.3mm x 8.3mm) Panasonic EEVFK2A220P |
| C2             |     1 | 1µF ±10% 100V X7R ceramic capacitor (1206) Murata GRM31CR72A105K        |
| C3             |     1 | 1µF±10%, 6.3V X7R ceramic capacitor (0603) Murata GRM188R70J105K        |
| C4             |     1 | 4.7µF±10%, 16V X7R ceramic capacitor (1206) Murata GRM31CR71C475K       |
| JU1, JU2, JU3  |     3 | 2-pin headers                                                           |
| L1             |     1 | 100µH, 680mA inductor Wurth 74408943101                                 |
| L1 (Alternate) |     1 | 150µH, 600mA inductor Wurth 74404054151                                 |

## Component Suppliers

| SUPPLIER         | PHONE        | WEBSITE                |
|------------------|--------------|------------------------|
| Murata Americas  | 770-436-1300 | www.murataamericas.com |
| Panasonic Corp.  | 800-344-2112 | www.panasonic.com      |
| Wurth Electronik | -            | www.we-online.com      |

Note: Indicate that you are using the MAX15062C when contacting these component suppliers.

## Evaluates: MAX15062C in

12V Output-Voltage Application

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                   |
|---------------|-------|---------------------------------------------------------------------------------------------------------------|
| R1            |     1 | 2.2MΩ ±1% resistor (0402)                                                                                     |
| R2            |     1 | 226kΩ ±1% resistor (0402)                                                                                     |
| R3            |     1 | 100kΩ ±1% resistor (0402)                                                                                     |
| R4            |     1 | 499kΩ ±1% resistor (0402)                                                                                     |
| R5            |     1 | 40.2kΩ ±1% resistor (0402)                                                                                    |
| R6            |     1 | 150kΩ ±1% resistor (0402)                                                                                     |
| U1            |     1 | 60V, 300mA, ultra-small, high-efficiency, synchronous step- down DC-DC converter (8 TDFN) Maxim MAX15062CATA+ |
| -             |     3 | Shunts                                                                                                        |
| -             |     1 | PCB: MAX15062C-12V EVKIT                                                                                      |

│

## MAX15062C 12V EV Kit Schematic

<!-- image -->

## MAX15062C 12V EV Kit PCB Layout Diagrams

<!-- image -->

MAX15062C 12V EV Kit-Top Silkscreen

<!-- image -->

MAX15062C 12V EV Kit PCB Layout-Bottom Layer

MAX15062C 12V EV Kit PCB Layout-Top Layer

<!-- image -->

MAX15062C 12V EV Kit PCB Layout-Bottom Silkscreen

<!-- image -->

│

Evaluates: MAX15062C in

## Ordering Information

| PART              | TYPE   |
|-------------------|--------|
| MAX15062C12EVKIT# | EV Kit |

# Denotes RoHS compliant.

Evaluates: MAX15062C in

12V Output-Voltage Application

│

## MAX15062C 12V Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                      | PAGES CHANGED   |
|-------------------|-----------------|------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 11/13           | Initial release                                                                                                  | -               |
|                 1 | 7/20            | Updated the Active-Low, Open-Drain Reset Output ( RESET ), Component List, Sche - matic, and PCB Layout sections | 2, 4-6          |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses Dre iPpOieG. MD[iP ,ntegrDteG reserYes the right to chDnge the circuitry DnG speci¿cDtions Zithout notice Dt Dny tiPe.

│

Evaluates: MAX15062C in

12V Output-Voltage Application