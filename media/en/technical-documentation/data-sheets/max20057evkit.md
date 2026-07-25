<!-- lastmod 2022-08-02 -->
## MAX20057 Evaluation Kit

## General Description

The MAX20057 evaluation kit (EV kit) is a fully assembled and tested application circuit that simplifies the evaluation of  the  MAX20057 400kHz/2.1MHz, 36V boost controller and  dual  buck  converters. All  installed  components  are rated for the automotive temperature range. Various test points and jumpers are included for evaluation.

The standard EV kit comes with the MAX20057ATIE/VY+ installed (5V, 3.3V, 2.1MHz), but can also be used to evaluate other MAX20057 variants with minimal component changes shown in the MAX20057 EV Kit Bill of Materials .

Ordering Information appears at end of data sheet.

## Table 1. Default Jumper Settings

| JUMPER     | SHUNT POSITION   | FUNCTION                                                 |
|------------|------------------|----------------------------------------------------------|
| JU3_EN1    | 1-2              | Buck1 controller enabled                                 |
| JU2_EN2    | 1-2              | Buck2 controller enabled                                 |
| JU1_EN3    | 1-2              | Boost controller enabled                                 |
| JU2_SUPSW2 | 2-3              | Buck2 input supplied by Boost output voltage             |
| JU4_FSYNC  | 1-2              | FSYNC is pulled to V BIAS enabling FPWM mode             |
| JU_PGOOD1  | Installed        | PGOOD1 is pulled up to V BIAS when OUT1 is in regulation |
| JU_PGOOD2  | Installed        | PGOOD2 is pulled up to V BIAS when OUT2 is in regulation |
| JU5_EXTVCC | 1-4              | EXTVCC is connected to GND                               |

<!-- image -->

## Features

- Dual High-Voltage Step-Down Converters with Integrated Power FETs to Minimize BoardArea-Occupancy
- Asynchronous Boost Controller
- 3.5V to 40V Input Supply Range
- Input Supply Range Extended Down to 2V with Boost Preenabled
- 10V Fixed Boost Output Voltage
- Buck1 Provides 5V Output Up To 3.5A Output Current
- Buck2 Provides 3.3V Output Up To 2A Output Current
- Buck Output Voltages Adjustable Between 1V and 10V Using External Resistors
- ±2% Output Voltage Accuracy for Buck Converters
- Selectable Buck2 Input Source
- Frequency-Synchronization Input
- Independent Enable Inputs
- Voltage-Monitoring PGOOD Outputs
- Jumpers and Test Points on Key Nodes for Simplified Evaluation
- Proven PCB Layout
- Fully Assembled and Tested

Evaluates: MAX20057

## MAX20057 Evaluation Kit

## Quick Start

## Required Equipment

- MAX20057 EV kit
- Adjustable DC power supply (PS1)
- Two digital multimeters (DMM1 and DMM2)
- Two electronic loads (EL1 and EL2)

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Verify that all jumpers are in their default positions as shown in Table 1.  Disable power supply output.
- 2) Connect the positive and negative terminals of PS1 to the VBATTF and GND test pads, respectively.
- 3) Connect  the  positive  terminal  of  DMM1  to  VOUT1; connect the negative terminal of DMM1 to PGND1.
- 4) Connect  the  positive  terminal  of  DMM2  to  VOUT2; connect the negative terminal of DMM2 to PGND2.
- 5) Connect  the  positive  terminal  of  EL1  to  VOUT1; connect the negative terminal of EL1 to PGND1.
- 6) Connect  the  positive  terminal  of  EL2  to  VOUT2; connect the negative terminal of EL2 to PGND2.
- 7) Set  the  power  supply  to  14V  and  3A  limit.    Enable power supply output.
- 8) The DMM1  voltmeter should display an output voltage of 5V when connected to VOUT1.
- 9) The DMM2  voltmeter should display an output voltage of 3.3V when connected to VOUT2.

## Detailed Description

The  MAX20057  EV  kit  provides  a  fully  developed  and proven layout for evaluating all variants of the MAX20057 family  of  small  current-mode-controlled  buck  converter ICs. Each converter accepts input supply voltages as high as 36V and input supply transients up to 40V.

## Switching Frequency and External Synchronization

The IC can operate in two modes, forced-PWM or skip mode. Skip mode offers improved efficiency over PWM during light-load conditions. When FSYNC is pulled low,

## Evaluates: MAX20057

the device operates in skip mode for light loads, and in PWM mode for larger loads. When FSYNC is pulled high, the  device  is  forced  to  operate  in  PWM  across  all  load conditions. The EV kit default configuration uses a shunt on JU4\_FSYNC to hold FSYNC high resulting in forcedPWM mode operation.

The FSYNC pin can be used to synchronize the switching frequency of the IC to an external source by applying an external clock signal. The device is forced to operate in PWM when FSYNC is connected to a clock source.

## Buck Output Monitoring (PGOOD\_)

The  EV  kit  provides  output  test  points  (PGOOD1  and PGOOD2) to monitor  the  status  of  the  respective  buck output voltage on VOUT1 and VOUT2. PGOOD is high impedance  when  the  respective  output  voltage  rises above 95% (typ) of regulation voltage. PGOOD goes low when the respective  output  voltage  drops  below  93.5% (typ) of its nominal regulated voltage.

To obtain logic signals, pull up PGOOD1 and PGOOD2 to  V BIAS   by  installing  the  shunts  on  jumpers  on  JU\_ PGOOD1 and JU\_PGOOD2.

## Setting the Output Voltage in Buck Converters

The  EV  kit  comes  preassembled  to  provide  a  fixed  5V voltage  regulation  on  VOUT1.  To  externally  adjust  the voltage  at  VOUT1,  remove  R1  and  place  appropriate resistors in positions R3 and R4 according to the following equation:

<!-- formula-not-decoded -->

where V FB = 1V (typ) and R4 = 50kΩ.

The EV kit comes preassembled to provide a fixed 3.3V voltage  regulation  on  VOUT2.  To  externally  adjust  the voltage  at  VOUT2,  remove  R12  and  place  appropriate resistors in positions R15 and R16 according to the following equation:

<!-- formula-not-decoded -->

where V FB = 1V (typ) and R16 = 50kΩ.

│

## Selecting EXTVCC

The  MAX20057  IC  provides  an  internal  low  dropout linear  regulator  (LDO)  that  supplies  the  IC  internal  circuitry  and  voltage  at  the  BIAS  pin  (V BIAS ).  This  LDO can be bypassed when a voltage source is detected at the EXTVCC pin in the range of 3.25V to 5.5V. The EV kit  provides  jumper  JU5\_EXTVCC,  which  allows  shunts to  be  installed  connecting  EXTVCC  to  either  VOUT1, VOUT2, or ground. Bypassing the internal LDO and using the switching converter output to supply V BIAS  increases efficiency over enabling the LDO.

When the voltage source on EXTVCC drops below 2.9V, the internal LDO is enabled to supply voltage at BIAS.

## Setting Boost Output Voltage

The EV kit comes installed with the MAX20057ATIE/VY+, which  provides  a  fixed  boost  output  voltage.  Contact Maxim Integrated Products for more information pertaining  to  ordering  additional  variants  of  MAX20057  with adjustable boost output voltage.

## Evaluating Other Variants

The MAX20057EVKIT# comes installed with the 5V/3.3V/2.1MHz  variant  (MAX20057ATIE/VY+)  Maxim Integrated  offers  additional  variations  including  those that  operate  at  lower  switching  frequency  of  400kHz for  increased  efficiency.  See MAX20057  EV  Kit  Bill  of Materials to  select  components  for  evaluating  400kHz variants.

See the MAX20057 IC Datasheet for part variant details and contact factory for additional variants of MAX20057.

## Ordering Information

| PART           | TYPE                  |
|----------------|-----------------------|
| MAX20057EVKIT# | 5V/3.3V/2.1MHz EV Kit |

#Denotes a RoHS-compliant device that may include lead that is exempt under the RoHS requirements.

## MAX20057 Evaluation Kit

## MAX20057 EV Kit Bill of Materials

| DESIGNATION                   |   QTY | DESCRIPTION                                              | MFG PART#                           |
|-------------------------------|-------|----------------------------------------------------------|-------------------------------------|
| C7-C9                         |     3 | 22uF ±10%, 10V X7R ceramic capacitor (1206)              | MURATA GRM31CR71A226KE15            |
| C11, C12                      |     2 | 100nF ±10%, 50V X7R ceramic capacitor (0402)             | TDK CGA2B3X7R1H104K                 |
| C13                           |     1 | 2.2uF ±10%, 6.3V X7R ceramic capacitor (0603)            | TDK CGA3E1X7R0J225K080AC            |
| C15                           |     1 | 4.7uF ±10%, 16V X7R ceramic capacitor (0603)             | MURATA GRM188Z71C475KE21            |
| C1, C3, C5, C6, C16, C23, C24 |     7 | 4.7uF ±10%, 50V X7R ceramic capacitor (1206)             | TDK CGA5L3X7R1H475K160AB            |
| C18                           |     1 | 22pF ±5%, 100V C0G ceramic capcitor (0603)               | MURATA GCM1885C2A220JA16            |
| C20                           |     1 | 4700pF ±5%, 100V C0G ceramic capacitor (0603)            | TDK CGA3E1C0G2A472J080AC            |
| C21                           |     1 | 47uF ±20%, 50V aluminum electrolytic capacitor (CASE_D)  | PANASONIC EEE-FT1H470AP             |
| C25                           |     1 | 100uF ±20%, 50V aluminum electrolytic capacitor (CASE_D) | PANASONIC EEH-ZC1H101V              |
| D3                            |     1 | Schottky diode, 120V,12A (T0-277A)                       | VISHAY GENERAL V12PM12-M3           |
| L1, L2                        |     2 | 2.2uH ±20%, 9.7A composite inductor                      | COILCRAFT XAL5030-222ME             |
| L3                            |     1 | 0.47uH ±20%, 17.5A shielded inductor                     | VISHAY DALE IHLP2525CZERR47M01      |
| Q1                            |     1 | N-Channel FET, 60V, 40A (POWERPAK 1212-8)                | VISHAY SILICONIX SIS862DN-T1-GE3    |
| R1, R2, R12, R14, R17, R20    |     6 | 0 Ω ± 0%; thick film resistor (0603)                     | VISHAY DALE CRCW06030000Z0          |
| R9                            |     1 | 0 Ω ± 0%; thick film resistor (0603)                     | VISHAY DALE CRCW04020000Z0EDHP      |
| R11                           |     1 | 0.005 Ω ±1%, 1W metal film resistor (2012)               | SUSUMU CO LTD. KRL2012E-M-R005-F-T5 |
| R5, R7, R8                    |     3 | 51.1k Ω ± 1%, 0.1W thick film resistor (0603)            | VISHAY DALE CRCW060351K1FK          |
| U1                            |     1 |                                                          | MAX20057ATIE/VY+                    |
| -                             |     1 | PCB: MAX20457 Evaluation Kit                             |                                     |

| CHANGES FOR 400kHz VERSION   | CHANGES FOR 400kHz VERSION   | CHANGES FOR 400kHz VERSION                  | CHANGES FOR 400kHz VERSION   |
|------------------------------|------------------------------|---------------------------------------------|------------------------------|
| DESIGNATION                  | QTY                          | DESCRIPTION                                 | MFG PART #                   |
| C7-C9                        | 3                            | 47uF ±10% 10V Ceramic Capacitor X7R (1210)  | MURATA GRM32ER71A476KE15L    |
| C10                          | 1                            | 22uF ±10%, 10V X7R ceramic capacitor (1206) | MURATA GRM31CR71A226KE15     |
| L1,L2                        | 2                            | 10uH ±20% Composite Inductor                | COILCRAFT XAL5050-103MEB     |

Evaluates: MAX20057

## MAX20057 EV Kit Schematic

<!-- image -->

Evaluates: MAX20057

## MAX20057 EV Kit PCB Layout Diagrams

MAX20057 EV Kit Component Placement - Top

<!-- image -->

│

## MAX20057 EV Kit PCB Layout Diagrams (continued)

MAX20057 EV Kit PCB Layout - Internal Layer 2

<!-- image -->

│

## MAX20057 EV Kit PCB Layout Diagrams (continued)

MAX20057 EV Kit PCB Layout - Internal Layer 3

<!-- image -->

│

## MAX20057 EV Kit PCB Layout Diagrams (continued)

MAX20057 EV Kit Component Placement - Bottom

<!-- image -->

│

## MAX20057 EV Kit PCB Layout Diagrams (continued)

MAX20057 EV Kit Component Placement - Silk Top

<!-- image -->

│

## MAX20057 EV Kit PCB Layout Diagrams (continued)

MAX20057 EV Kit Component Placement - Silk Bottom

<!-- image -->

## MAX20057 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                       | PAGES CHANGED   |
|-------------------|-----------------|---------------------------------------------------|-----------------|
|                 0 | 2/19            | Initial release                                   | -               |
|                 1 | 10/19           | Updated MAX20057 EV Kit Bill of Materials section | 4               |
|                 2 | 1/20            | Updated MAX20057 EV Kit Schematic section         | 5               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. 0a[im ,nteJrated reserves the riJht to chanJe the circuitry and specifications Zithout notice at any time.

│

Evaluates: MAX20057