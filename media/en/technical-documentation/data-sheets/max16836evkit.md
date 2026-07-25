<!-- lastmod 2022-08-03 -->
<!-- image -->

## MAX16836 Evaluation Kit

## General Description

The MAX16836 evaluation kit (EV kit) demonstrates a current-controlled, high-output-current LED driver based on the MAX16836 current regulator. The EV kit is capable of supplying regulated output currents of up to 350mA and runs at supply voltages between 6.5V to 40V.

The MAX16836 EV kit features a PWM dimming control, user-selectable three-level output-current setting, and a 5V regulated output, which supplies up to 4mA of output current. The MAX16836 EV kit also evaluates the MAX16835 IC; contact the factory for a free sample of the MAX16835 IC.

| DESIGNATION   |   QTY | DESCRIPTION                                                                            |
|---------------|-------|----------------------------------------------------------------------------------------|
| CS+, V5       |     2 | Test points                                                                            |
| C1, C2        |     2 | 0.1µF ±10%, 50V X7R ceramic capacitors (0603) Murata GRM188R71H104K TDK C1608X7R1H104K |
| JU1           |     1 | 2-pin header                                                                           |
| JU2           |     1 | 3-pin header                                                                           |
| R1            |     1 | 0.56 Ω ±1%, 1/4W resistor (0805) Susumu RP2012T-R56-F                                  |

Features

- ♦ 6.5V to 40V Supply Voltage Range
- ♦ Selectable 150mA, 250mA, or 350mA Output Current
- ♦ 5V Regulated Output with 4mA Source Capability
- ♦ Wide-Range Dimming Control with PWM
- ♦ Lead(Pb)-Free and RoHS Compliant
- ♦ Fully Assembled and Tested

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX16836EVKIT+ | EV Kit |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                              |
|---------------|-------|--------------------------------------------------------------------------|
| R2            |     1 | 0.82 Ω ±1%, 1/4W resistor (0805) Susumu RP2012T-R82-F                    |
| R3, R4        |     2 | 100k Ω ±5% resistors (0603)                                              |
| U1            |     1 | 350mA adjustable high-brightness LED driver (16 TQFN) Maxim MAX16836ATE+ |
| -             |     2 | Shunts                                                                   |
| -             |     1 | PCB: MAX16836 Evaluation Kit+                                            |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| Susumu International USA               | 208-328-0307 | www.susumu-usa.com          |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |

Note: Indicate that you are using the MAX16836 when contacting these component suppliers.

1

## MAX16836 Evaluation Kit

## Quick Start

## Recommended Equipment

Before beginning, the following equipment is needed:

- 0 to 30V or above, 0.5A power supply

## Procedure

The MAX16836 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Connect a DC power supply (0 to 30V or above, 0.5A) to VIN.
- 2) Verify  that  a  shunt  is  not  installed  across  jumper JU1 to enable U1.
- 3) Verify  that  a  shunt  is  installed  across  pins  1-2  of jumper JU2 to select 350mA output current.
- 4) Connect a 350mA-rated LED between LED+ and LED-.
- 5) Turn on the power supply and increase the input voltage to above 6.5V. The LED should glow with full  brightness.  Measure the LED current, which should be 350mA ± 3.5%.
- 6) Increase the supply voltage and measure the LED current,  which should be 350mA ± 3.5%. Note that the maximum voltage drop between IN and OUT should be ~7V to limit the maximum power dissipation to approximately 2.5W.
- 7) Measure the voltage across V5, which should be 5V ± 4%.

## Detailed Description of Hardware

The MAX16836 EV kit demonstrates a high-outputcurrent LED driver with accurate current control based on the MAX16836 current regulator. The MAX16836 EV kit is capable of supplying regulated output currents of up to 350mA and runs at supply voltages between 6.5V to 40V. If the supply voltage is above the LED operating voltage by more than 7V, the maximum output current should be limited to prevent the device from entering into thermal shutdown due to excessive power dissipation.

The MAX16836 EV kit features PWM dimming to control the LED brightness by varying the duty cycle of the PWM input signal. Users can select between three lev- els of output LED currents by setting jumper JU2 (see Table 1 for jumper settings). The MAX16836 EV kit also includes a connection for the 5V regulated output and access to the on-board current-sense resistor.

## Output Current Setting

The output current can be adjusted by replacing resistors R2 or R3 with values calculated using the following equation:

<!-- formula-not-decoded -->

where RSENSE is the external current-sense resistance between CS+ and GND, ILED is the desired output current, and VSENSE is 200mV (typ).

## PWM Dimming

The PWM dimming controls the LED brightness by adjusting the duty cycle of the PWM input signal connected to the DIM input. A high at the DIM input turns on the output current and a low turns off the output current. Connect a signal with peak amplitude between 5V and 40V, frequency between 100Hz and 2kHz, and vary the duty cycle to adjust the LED brightness. LED brightness increases when duty cycle increases and vice versa. Duty cycle can be as low as 10% even at a PWM frequency of 2kHz.

## 5V Regulated Output

The 5V regulator can be used to power other components from the V5 test point. The 5V output supplies up to 4mA of current.

## Jumper Selection

Two-pin jumper JU1 controls the EN pin of the MAX16836 and enables or disables the device. Threepin  jumper JU2 selects between three different output current settings. Table 1 lists the jumper options.

## Table 1. Jumper JU1 and JU2 Functions

| JUMPER   | SHUNT POSITION AND FUNCTION   | SHUNT POSITION AND FUNCTION   | SHUNT POSITION AND FUNCTION   |
|----------|-------------------------------|-------------------------------|-------------------------------|
| JUMPER   | 1-2 (installed)               | 2-3                           | Open                          |
| JU1      | U1 disabled                   | -                             | U1 enabled*                   |
| JU2      | 350mA*                        | 250mA                         | 150mA                         |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX16836 Evaluation Kit

Figure 1. MAX16836 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX16836 Evaluation Kit

<!-- image -->

Figure 2. MAX16836 EV Kit Component Placement GuideComponents Side

Figure 3. MAX16836 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX16836 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_