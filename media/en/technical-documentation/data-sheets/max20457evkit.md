<!-- lastmod 2022-08-02 -->
## MAX20457 Evaluation Kit

## General Description

The MAX20457 evaluation kit (EV kit) is a fully assembled and  tested  application  circuit  that  simplifies  the  evalu -ation  of  the  MAX20457  2.1MHz  dual  buck  converters. All  installed  components  are  rated  for  the  automotive temperature range. Various test points and jumpers are included for evaluation.

The standard EV kit comes with the MAX20457ATIE/VY+ installed (5V, 3.3V, 2.1MHz) and can also be used to evaluate other MAX20457 variants with minimal component changes shown in the MAX20457 EV Kit Bill of Materials.

## Benefits and Features

- Dual High-Voltage Step-Down Converters with Integrated Power FETs to Minimize Board-Area Occupancy
- 3.5V to 40V Input Supply Range
- Buck1 Provides 5V Output up to 3.5A Output Current
- Buck2 Provides 3.3V Output up to 2A Output Current
- Buck Output Voltages Adjustable Between 1V and 14V using External Resistors
- ±2% Output Voltage Accuracy for Buck Converters
- Selectable Buck2 Input Source
- Frequency-Synchronization Input
- Independent Enable Inputs
- Voltage-Monitoring PGOOD Outputs
- Jumpers and Test Points on Key Nodes for Simplified Evaluation
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX20457

## Quick Start

## Required Equipment

- MAX20457 EV kit
- 15V, 7A DC power supply (PS1)
- Two voltmeters (VM1 and VM2)
- Two electronic loads (EL1 and EL2)

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation.

## Caution:  Do  not  turn  on  the  power  supply  until  all connections are completed.

- 1) Verify that all jumpers are in their default positions as shown in Table 1.
- 2) Preset the power supply PS1 to 14V. Turn off the PS1.
- 3) Preset EL1 to 3A. Turn off the EL1.
- 4) Preset EL2 to 1.5A. Turn off the EL2.
- 5) Connect the positive terminal of EL1 to V OUT1 ; connect the negative terminal of EL1 to PGND1.
- 6) Connect the positive terminal of EL2 to V OUT2 ; connect the negative terminal of EL2 to PGND2.
- 7) Connect the positive terminal of PS1 to the V BATTF ; connect the negative terminal of PS1 to GND3.
- 8) Connect the positive terminal of VM1 to V OUT1 ; connect the negative terminal of VM1 to PGND1.
- 9) Connect the positive terminal of VM2 to V OUT2 ; connect the negative terminal of VM2 to PGND2.
- 10)  Turn on the power supply.
- 11)  Enable the electronic loads, EL1 and EL2.
- 12)  Verify that the voltmeter on V OUT1  measures approximately 5V.
- 13)  Verify that the voltmeter on V OUT2  measures approximately 3.3V.

<!-- image -->

## Table 1. Default Jumper Settings

| JUMPER     | SHUNT POSITION   | FUNCTION                                                 |
|------------|------------------|----------------------------------------------------------|
| JU3_EN1    | 1-2              | Buck1 controller enabled                                 |
| JU2_EN2    | 1-2              | Buck2 controller enabled                                 |
| JU2_SUPSW2 | 2-3              | Buck2 input supplied by V BATTF                          |
| JU4_FSYNC  | 1-2              | FSYNC is pulled to V BIAS enabling FPWM mode             |
| JU_PGOOD1  | Installed        | PGOOD1 is pulled up to V BIAS when OUT1 is in regulation |
| JU_PGOOD2  | Installed        | PGOOD2 is pulled up to V BIAS when OUT2 is in regulation |
| JU5_EXTVCC | 1-4              | EXTVCC is connected to V OUT1                            |

## Detailed Description

The  MAX20457  EV  kit  provides  a  fully  developed  and proven layout for evaluating all variants of the MAX20457 family  of  current-mode-controlled  buck  converter  ICs. Each converter accepts input supply voltages as high as 36V and input supply transients up to 40V.

## Switching Frequency and External Synchronization

The IC can operate in two modes, forced-PWM or skip mode. Skip mode offers improved efficiency over PWM during lightload conditions. When FSYNC is pulled low, the device operates in skip mode for light loads, and in PWM mode for larger loads. When FSYNC is pulled high, the device is forced to operate in PWM across all load conditions.

The FSYNC pin can be used to synchronize the switching frequency of the IC to an external source by applying an external clock signal. The device is forced to operate in PWM when FSYNC is connected to a clock source.

## Buck Output Monitoring (PGOOD\_)

The  EV  kit  provides  output  test  points  (PGOOD1  and PGOOD2) to monitor  the  status  of  the  respective  buck output  voltage  on  V OUT1   and  V OUT2 .  PGOOD  is  high impedance  when  the  respective  output  voltage  rises above its 95% (typ) of regulation voltage. PGOOD goes low  when  the  respective  output  voltage  drops  below 93.5% (typ) of its nominal regulated voltage.

To obtain logic signals, pull up PGOOD1 and PGOOD2 to  V BIAS   by  installing  the  shunts  on  jumpers  on  JU\_ PGOOD1 and JU\_PGOOD2.

## Setting the Output Voltage in Buck Converters

The  EV  kit  comes  preassembled  to  provide  a  fixed  5V voltage  regulation  on  V OUT1 .  To  externally  adjust  the voltage  at  V OUT1 ,  remove  R1  and  place  appropriate resistors in positions R3 and R4 according to the following equation:

<!-- formula-not-decoded -->

where VFB = 1V (typ) and R4 = 50kΩ.

The EV kit comes preassembled to provide a fixed 3.3V voltage regulation on V OUT2 . To externally adjust the voltage at V OUT2 , remove R12 and place appropriate resistors in positions R15 and R16 according to the following equation:

<!-- formula-not-decoded -->

where VFB2 = 1V (typ) and R16 = 50kΩ.

│

## Selecting EXTVCC

The  MAX20457  IC  provides  an  internal  5V  BIAS  LDO that  supplies  the  IC  internal  circuitry.  This  LDO  can  be bypassed when a voltage source in the range of 3.25V to 5.5V is detected at the EXTVCC pin. The EV kit provides  jumper  JU5\_EXTVCC,  which  allows  shunts  to  be installed connecting EXTVCC to either V OUT1  or V OUT2 . This bypasses the internal LDO and uses the switching converter  output  to  supply  V BIAS ,  providing  increased efficiency over enabling the LDO. Connecting EXTVCC to GND enables the internal LDO to supply V BIAS .

When the voltage source on EXTVCC drops below 2.9V, the internal LDO is enabled to supply voltage at BIAS.

## Ordering Information

| PART           | TYPE                  |
|----------------|-----------------------|
| MAX20457EVKIT# | 5V/3.3V/2.1MHz EV Kit |

# Denotes RoHS compliant.

## Evaluating Other Variants

The MAX20457EVKIT# comes installed with the 5V/3.3V/2.1MHz variant (MAX20457ATIE/VY+).

Maxim  offers  additional  variations,  including  those  that operate  at  the  lower  switching  frequency  of  400kHz for  increased  efficiency.  See  MAX200457  EV  Kit  Bill  of Materials  to  select  components  for  evaluating  400kHz variants.

See  the MAX20457  IC  Datasheet  for  part  variant details  and  contact  the  factory  for  additional  variants  of MAX20457.

## MAX20457 EV Kit Bill of Materials

| DESIGNATION     |   QTY | DESCRIPTION                                             | MFG PART #                 |
|-----------------|-------|---------------------------------------------------------|----------------------------|
| C7-C9           |     3 | 22µF ±10%, 10V X7R ceramic capacitor (1206)             | MURATA GRM31CR71A226KE15   |
| C11, C12        |     2 | 100µF ±10%, 50V X7R ceramic capacitor (0402)            | TDK CGA2B3X7R1H104K        |
| C13             |     1 | 2.2µF ±10%, 6.3V X7R ceramic capacitor (0603)           | TDK CGA3E1X7R0J225K080AC   |
| C15             |     1 | 4.7µF ±10%, 16V X7R ceramic capacitor (0603)            | MURATA GRM188Z71C475KE21   |
| C1, C3, C5      |     3 | 4.7µF ±10%, 50V X7R ceramic capacitor (1206)            | TDK CGA5L3X7R1H475K160AB   |
| C21             |     1 | 47µF ±20%, 50V aluminum electrolytic capacitor (CASE_D) | PANASONIC EEE-FT1H470AP    |
| L1, L2          |     2 | 2.2µH ±20%, 9.7A composite inductor                     | COILCRAFT XAL5030-222ME    |
| R1,R2, R12, R14 |     4 | 0Ω ± 0%; thick film resistor (0603)                     | VISHAY DALE CRCW06030000Z0 |
| R5, R8          |     2 | 51.1kΩ ±1%, 0.1W thick film resistor (0603)             | VISHAY DALE CRCW060351K1FK |
| U1              |     1 | 36V Dual Synchronous Buck Converter                     | MAX20457ATIE/VY+           |
| -               |     1 | PCB: MAX20457 Evaluation Kit                            |                            |

| CHANGES FOR 400kHz VERSION   | CHANGES FOR 400kHz VERSION   | CHANGES FOR 400kHz VERSION                  | CHANGES FOR 400kHz VERSION   |
|------------------------------|------------------------------|---------------------------------------------|------------------------------|
| DESIGNATION                  | QTY                          | DESCRIPTION                                 | MFG PART #                   |
| C7-C9                        | 3                            | 47µF ±10% 10V ceramic capacitor X7R (1210)  | MURATA GRM32ER71A476KE15L    |
| C10                          | 1                            | 22µF ±10%, 10V X7R ceramic capacitor (1206) | MURATA GRM31CR71A226KE15     |
| L1,L2                        | 2                            | 10µH ±20% composite Inductor                | COILCRAFT XAL5050-103MEB     |

│

Evaluates: MAX20457

## MAX20457 EV Kit Schematic

<!-- image -->

│

## MAX20457 EV PCB Layouts

MAX20457 EV Kit Component Placement - Top

<!-- image -->

MAX20457 EV Kit PCB Layout - Internal Layer 2

<!-- image -->

MAX20457 EV Kit PCB Layout - Internal Layer 3

<!-- image -->

MAX20457 EV Kit Component Placement - Bottom

<!-- image -->

│

## MAX20457 EV PCB Layouts (continued)

MAX20457 EV Kit Silkscreen Top

<!-- image -->

MAX20457 EV Kit Silkscreen Bottom

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 7/19            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. 0a[im ,nteJrated reserves the riJht to chanJe the circuitry and specifications without notice at any time.

<!-- image -->

│

Evaluates: MAX20457