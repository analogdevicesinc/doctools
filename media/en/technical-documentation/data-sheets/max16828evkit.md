<!-- lastmod 2022-08-03 -->
<!-- image -->

## General Description

The MAX16828 evaluation kit (EV kit) is a fully assembled and tested PCB that demonstrates a currentcontrolled, high-output-current LED driver with accurate current control based on the MAX16828 current regulator.  The  EV  kit  features  pulse-width  modulation  (PWM) dimming control and is configured for preset output currents of 100mA or 200mA. The EV kit can operate from a single power supply at voltages between 6.5V and 40V. The MAX16828 EV kit also evaluates the MAX16815 IC; contact the factory for a free sample of the MAX16815 IC.

Warning :  Under  severe fault  or  failure  conditions,  this EV kit may dissipate large amounts of power. Operate this EV kit with care to avoid possible personal injury.

| DESIGNATION   |   QTY | DESCRIPTION                                                                            |
|---------------|-------|----------------------------------------------------------------------------------------|
| C1, C2        |     2 | 0.1µF ±10%, 50V X7R ceramic capacitors (0603) Murata GRM188R71H104K TDK C1608X7R1H104K |
| JU1           |     1 | 2-pin header                                                                           |
| R1            |     1 | 100k Ω ±5% resistor (0603)                                                             |
| R2, R3        |     2 | 1 Ω , 1/4W ±1% resistors (0805) Susumu RL12205-1R0-F                                   |

## Features

- ♦ 6.5V to 40V Input Supply Voltage Range
- ♦ 100mA/200mA Output Current
- ♦ Wide-Range Dimming Control with PWM
- ♦ 5V Regulated Output with 4mA Source Capability
- ♦ Lead(Pb)-Free and RoHS Compliant
- ♦ Fully Assembled and Tested

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX16828EVKIT+ | EV Kit |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                |
|---------------|-------|----------------------------------------------------------------------------|
| U1            |     1 | 200mAadjustable high-brightness LED driver (6 TDFN-EP*) Maxim MAX16828ATT+ |
| V5            |     1 | Test point                                                                 |
| -             |     1 | Shunt                                                                      |
| -             |     1 | PCB: MAX16828 Evaluation Kit+                                              |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| Susumu International USA               | 208-328-0307 | www.susumu-usa.com          |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |

Note: Indicate that you are using the MAX16828 when contacting these component suppliers.

## MAX16828 Evaluation Kit

## Quick Start

## Recommended Equipment

Before beginning, the following equipment is needed:

- 0 to 30V or above, 0.5A DC power supply

## Procedure

The MAX16828 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Connect a 0 to 30V or above, 0.5A DC power supply to VIN.
- 2) Verify that a shunt is installed on JU1.
- 3) Turn on the power supply and increase the input voltage to above 6.5V. Measure the LED current between the LED+ and LED- pads to show 200mA ±3.5%.
- 4) Measure voltage across test point V5 to show 5V ±4%.

## Detailed Description of Hardware

The MAX16828 EV kit demonstrates a current-controlled,  high-output-current LED driver with accurate current control based on the MAX16828 current regulator.  This  EV  kit  is  configured  for  supplying  regulated output currents of 100mA to 200mA. The EV kit can operate from a single power supply at voltages between 6.5V and 40V.

The EV kit also features pulse-width modulation (PWM) dimming control and provides a test point (V5) for convenient access to the 5V regulated output.

## Output Current (LED+, LED- )

The output current for the standard output (between LED+ and LED- pads) can be set at either 100mA or 200mA by installing or removing jumper JU1. See Table 1 for jumper settings. By default, the output current is 200mA.

## Table 1. Jumper JU1 Functions

| SHUNT POSITION   |   RSENSE ( Ω ) |   STANDARD OUTPUT CURRENT (I LED AT LED+ AND LED- PADS) (mA) |
|------------------|----------------|--------------------------------------------------------------|
| Installed*       |              1 |                                                          200 |
| Not installed    |              2 |                                                          100 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Setting the Output Current

The output current can be adjusted by replacing resistors R2 or R3 with values calculated using the following equation:

<!-- formula-not-decoded -->

where RSENSE is the external current-sense resistance between CS+ and GND, ILED is the desired output current, and VRSENSE is 200mV (typ).

## PWM Dimming

The PWM dimming controls the LED brightness by adjusting the duty cycle of the PWM input signal connected to the DIM input. A high at the DIM input turns on the output current and a low turns off the output current. Connect a signal with peak amplitude between 5V and 40V, and with frequency between 100Hz to 2kHz and vary the duty cycle to adjust the LED brightness. LED brightness increases when duty cycle increases and vice versa. Duty cycle can be as low as 10%, even at a PWM frequency of 2kHz.

## 5V Regulated Output

The 5V regulator can be used to power other components from the V5 test point. The 5V output can supply up to 4mA of current and is not disabled during PWM off.

<!-- image -->

## MAX16828 Evaluation Kit

Figure 1. MAX16828 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX16828 Evaluation Kit

<!-- image -->

Figure 2. MAX16828 EV Kit Component Placement GuideComponent Side

Figure 3. MAX16828 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX16828 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_