<!-- lastmod 2022-08-03 -->
## General Description

The MAX1570 evaluation kit (EV kit) is a fully assembled and tested surface-mount circuit board. The EV kit contains the MAX1570, a white LED driver with high-efficiency charge pump. The EV kit accepts a 2.7V to 5.5V input and drives up to five white LEDs with regulated constant current for uniform intensity. The MAX1570 runs at 1MHz fixed frequency, allowing tiny external components.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                   |
|---------------|-------|-----------------------------------------------------------------------------------------------|
| C1, C3, C4    |     3 | 1µF ±10%, 10V X5R ceramic capacitors (0603) TDK C1608X5R1A105K or Taiyo Yuden JMK107BJ105KA   |
| C2            |     1 | 4.7µF ±20%, 6.3V X5R ceramic capacitor (0805) Taiyo Yuden JMK212BJ475MG or TDK C2012X5R0J475M |
| C5            |     0 | Not installed, ceramic capacitor (0603)                                                       |
| D1-D5         |     5 | Surface-mount white LEDs                                                                      |
| JU1, JU2      |     2 | 3-pin headers                                                                                 |
| R1            |     1 | 9.09k Ω ±1% resistor (0603)                                                                   |
| R2, R3        |     0 | Not installed, resistor (0603)                                                                |
| U1            |     1 | MAX1570ETE (16-pin QFN (4mm x 4mm))                                                           |
| None          |     2 | Shunts                                                                                        |
| None          |     1 | MAX1570 PC board                                                                              |
| None          |     1 | MAX1570 EV kit data sheet                                                                     |
| None          |     1 | MAX1570 data sheet                                                                            |

<!-- image -->

## Features

- ♦ Excellent (0.3%) LED-to-LED Current Matching
- ♦ 2.7V to 5.5V Input Range
- ♦ 30mA/LED Drive Capability
- ♦ Five LEDs at 150mA Total Current
- ♦ 0.1µA (typ) IC Shutdown Current
- ♦ Digital PWM LED Dimming Control
- ♦ Fixed 1MHz Switching Frequency
- ♦ Surface-Mount Component Construction
- ♦ 16-Pin 4mm x 4mm Thin QFN Package
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE IC PACKAGE                |
|--------------|--------------------------------------|
| MAX1570EVKIT | 0°C to +70°C 16 Thin QFN (4mm x 4mm) |

## Quick Start

The MAX1570 EV kit is fully assembled and tested. Perform the following steps to verify board operation.

Do not turn on the power supply until all connections are completed:

- 1) Verify that shunts are across pins 1 and 2 of jumpers JU1 (EN1) and JU2 (EN2).
- 2) Connect a 2.7V to 5.5V power supply to the VIN pad. Connect the power-supply ground to the GND pad to the right of VIN.
- 3) Turn on the power supply.
- 4) Verify  that  all  five  white  LEDs  are  on  with  uniform intensity.

For instructions on dimming control, see Table 1.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

1

## MAX1570 Evaluation Kit

## Component Suppliers

| SUPPLIER    | PHONE        | FAX          | WEBSITE               |
|-------------|--------------|--------------|-----------------------|
| Taiyo Yuden | 800-348-2496 | 847-925-0899 | www.t-yuden.com       |
| TDK         | 847-803-6100 | 847-390-4405 | www.component.tdk.com |

Note: Please indicate that you are using the MAX1570 when contacting these suppliers.

## Detailed Description

## Jumper Selection

The MAX1570 provides pins EN1 and EN2 to control ON/OFF, 1/3, 2/3, and full current, which controls the VSET voltage. Jumpers JU1 and JU2 drive these two pins to either VIN or GND (see Table 1). An external signal can be used to drive any of the EN1 or EN2 control  pins  by  removing  the  shunts  completely  from  the appropriate jumpers and connecting the external signal to the appropriate connecting pads.

## Table 1. JU1 and JU2 Functions

Figure 1. MAX1570 EV Kit Schematic

| JU1 SHUNT LOCATION   | EN1 PIN          | JU2 SHUNT LOCATION   | EN2 PIN          | V SET VOLTAGE (mV)   | MAX1570 OUTPUT                    |
|----------------------|------------------|----------------------|------------------|----------------------|-----------------------------------|
| 1 and 2              | Connected to VIN | 1 and 2              | Connected to VIN | 600                  | MAX1570 is enabled, full current. |
| 1 and 2              | Connected to VIN | 2 and 3              | Connected to GND | 400                  | MAX1570 is enabled, 2/3 current.  |
| 2 and 3              | Connected to GND | 1 and 2              | Connected to VIN | 200                  | MAX1570 is enabled, 1/3 current.  |
| 2 and 3              | Connected to GND | 2 and 3              | Connected to GND | Undefined            | MAX1570 is in shutdown mode.      |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Setting LED Current

The default LED current is set to 15mA (with shunts across pins 1 and 2 on JU1 and JU2).

To set a desired LED current, change R1, where R1 = 230 x VSET / ILED(desired).

<!-- image -->

Figure 2. MAX1570 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

Figure 4. MAX1570 EV Kit PC Board Layout-Component Side

<!-- image -->

## MAX1570 Evaluation Kit

Figure 3. MAX1570 EV Kit Component Placement GuideBottom Silkscreen

<!-- image -->

Figure 5. MAX1570 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ 3

## Evaluates:  MAX1570