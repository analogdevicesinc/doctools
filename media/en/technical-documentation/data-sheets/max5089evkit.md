<!-- lastmod 2022-08-02 -->
## General Description

The MAX5089 evaluation kit (EV kit) is a fully assembled and tested circuit board that evaluates the MAX5089 synchronous buck converter IC with an integrated highside n-channel MOSFET. The MAX5089 EV kit is configured as a buck converter that operates over a wide 5.5V to 16V input voltage range, and provides up to 2A at the 3.3V output.

The MAX5089 IC features a SYNC input to provide external frequency synchronization for noise-sensitive applications and a PGOOD output signal that can be used as a system reset signal during power-up. The EV kit  provides PC pads to evaluate the SYNC and PGOOD features. The MAX5089 can operate over the -40°C to +125°C automotive temperature range.

| DESIGNATION      |   QTY | DESCRIPTION                                                          |
|------------------|-------|----------------------------------------------------------------------|
| C1               |     1 | 47µF, 35V electrolytic capacitor (6.3mm x 6.0mm) Sanyo 35CE47KX      |
| C2               |     1 | 10µF ±20%, 25V X5R ceramic capacitor (1210) Taiyo Yuden TMK325BJ106M |
| C3               |     1 | 1200pF ±5%, 50V C0G ceramic capacitor (0603) Murata GRM1885C1H122J   |
| C4               |     1 | 22pF ±5%, 100V C0G ceramic capacitor (0603) Murata GRM1885C2A220J    |
| C5               |     1 | 330pF ±5%, 50V C0G ceramic capacitor (0603) Murata GRM1885C1H331J    |
| C6, C8, C10, C12 |     4 | 0.1µF ±10%, 25V X7R ceramic capacitors (0603) Murata GRM188R71E104K  |
| C7               |     1 | 0.22µF ±10%, 10V X5R ceramic capacitor (0603) Murata GRM188R61A224K  |
| C9               |     1 | 4.7µF ±10%, 6.3V X5R ceramic capacitor (0603) Murata GRM188R60J475K  |

<!-- image -->

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                        |
|---------------|-------|--------------------------------------------------------------------|
| C11           |     1 | 22µF ±20%, 6.3V X5R ceramic capacitor (1206) Murata GRM31CR60J226M |
| D1            |     1 | 500mA, 40V Schottky diode (SOD-123) Central Semiconductor CMHSH5-4 |
| D2            |     1 | 1A, 20V Schottky diode (SOD-123F) Central Semiconductor CMMSH1-20  |
| D3            |     1 | Not installed, Schottky diode (SMB) Diodes Inc B340LB recommended  |
| JU1           |     1 | 2-pin header                                                       |
| L1            |     1 | 4.7µH, 3.4A inductor Sumida CDRH8D28-4R7                           |
| N1            |     1 | 30V, 5.1A n-channel MOSFET (SuperSOT-6) Fairchild Si3456DV         |
| R1            |     1 | 27.4k Ω ±1% resistor (0603)                                        |
| R2, R5        |     2 | 6.04k Ω ±1% resistors (0603)                                       |
| R3            |     1 | 750 Ω ±1% resistor (0603)                                          |
| R4            |     1 | 10k Ω ±1% resistor (0603)                                          |
| R6            |     1 | 4.7 Ω ±5% resistor (0603)                                          |
| R7            |     1 | 15 Ω ±5% resistor (0603)                                           |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

<!-- image -->

## Features

- ♦ 5.5V to 16V Input Voltage Range
- ♦ 3.3V at 2A Buck Converter
- ♦ 250kHz to 2.2MHz Adjustable Switching Frequency
- ♦ Internal High-Side Switch
- ♦ High Efficiency Up to 90% (At 300kHz)
- ♦ SYNC Input and PGOOD Output
- ♦ Overcurrent and Thermal Protection
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE   |
|--------------|--------------|--------------|
| MAX5089EVKIT | 0°C to 70°C* | 16 TQFN      |

## MAX5089 Evaluation Kit

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                 |
|---------------|-------|---------------------------------------------|
| R8, R9        |     2 | 10k Ω ±5% resistors (0603)                  |
| R10           |     1 | 0 Ω ±5% resistor (0603)                     |
| U1            |     1 | MAX5089ATE+ (16-pin TQFN with EP 5mm x 5mm) |
| -             |     1 | Shunt                                       |
| -             |     1 | MAX5089 EV kit board                        |

## Quick Start

## Recommended Equipment

- 20V adjustable, 3A power supply
- Electronic load capable of sinking up to 2A (e.g., HP 6060B)
- Two digital voltmeters

The MAX5089 EV kit is fully assembled and tested. Follow these steps to verify board operation.

## Procedure

## Do not turn on the power supply until all connections are completed.

- 1) Verify  that  no  shunt  is  installed  across  the  pins  of jumper JU1 (U1 enabled).
- 2) Connect the power-supply positive terminal to the VIN PC board pad on the EV kit. Connect the powersupply ground terminal to the PGND PC pad.
- 3) Connect the positive terminal of the electronic load to the VOUT PC board pad on the EV kit. Connect the ground terminal of the electronic load to the PGND PC pad.
- 4) Connect a digital voltmeter across the VOUT and PGND PC pads.
- 5) Connect a digital voltmeter across the PGOOD and SGND PC pads.
- 6) Turn on the power supply.
- 7) Set the power supply voltage to 12V.
- 8) Enable and set the electronic load to 2A.
- 9) Verify that the voltmeter connected to VOUT measures 3.3V.
- 10) Verify that the voltmeter connected to PGOOD measures approximately 5.2V.

## Detailed Description

The MAX5089 EV kit circuit uses a MAX5089 buck converter  IC  (U1)  to  implement  a  step-down  DC-DC converter circuit. The MAX5089 EV kit operates over a wide 5.5V to 16V input voltage range and is configured to provide 3.3V at up to 2A of output current. The MAX5089 IC features an internal low RDSON MOSFET to  achieve high efficiency and lower overall system cost. The MAX5089 EV kit's internal switching frequency is preset at 2MHz. The MAX5089 SYNC input can be used to synchronize the converter to an external digital clock. The MAX5089 EV kit provides a PC pad to access the PGOOD signal that can be used as a system reset signal during power-up. The MAX5089 features overcurrent, undervoltage lockout, and thermalshutdown protection.

## Configuring the Output Voltage (VOUT)

The MAX5089 EV kit buck converter output voltage is configured to 3.3V by resistors R1 and R2. The EV kit's output voltage, VOUT, can be reconfigured in the range of 0.6V to (0.8 x VIN) by replacing resistors R1 and R2. Use the following equation to reconfigure the output voltage to the desired value:

<!-- formula-not-decoded -->

where, VOUT is the desired output voltage in volts and R1 is typically 27.4k Ω .

## Component Suppliers

| SUPPLIER                | PHONE        | WEBSITE               |
|-------------------------|--------------|-----------------------|
| Central Semiconductor   | 631-435-1110 | www.centralsemi.com   |
| Diodes Inc.             | 805-446-4800 | www.diodes.com        |
| Fairchild               | 888-522-5372 | www.fairchildsemi.com |
| Murata                  | 770-436-1300 | www.murata.com        |
| Sanyo Electronic Device | 619-661-6322 | www.sanyovideo.com    |
| Sumida                  | 847-545-6700 | www.sumida.com        |
| Taiyo Yuden             | 800-348-2496 | www.t-yuden.com       |

Note:

Indicate that you are using the MAX5088/MAX5089 when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Reconfiguring the MAX5089 EV kit for a new output voltage may require replacing inductor L1, capacitors C2 and/or C11. The minimum output voltage is also impacted by the minimum controllable ON time of the IC. To select a new value for inductor L1, and capacitors C2 and C11, refer to the Inductor Selection , Input Capacitors and Output Capacitors sections in the MAX5089 IC data sheet.

## Enable (EN)

The MAX5089 EN input can be used to enable the MAX5089 IC. The MAX5089 EV kit features jumper JU1 to  configure  the  EN  input  pin.  A  logic-high  on  the  EN pin  enables the MAX5089 converter, whereas a logiclow disables the MAX5089 IC. See Table 1 for jumper JU1 function.

## Table 1. EN Jumper JU1 Function

| SHUNT LOCATION   | EN PIN           | EV KIT FUNCTION   |
|------------------|------------------|-------------------|
| Not installed    | Connected to VL  | U1 is enabled     |
| Installed        | Connected to GND | U1 is disabled    |

## Power-Good Output (PGOOD)

The MAX5089 EV kit provides a PC pad to access the power-good output signal of the MAX5089. The PGOOD output can be used as a system reset signal during power-up. PGOOD goes high after VOUT rises above 92.5% of the nominal set voltage. PGOOD is pulled up to VL (5.2V) using resistor R9. The PGOOD output is pulled low when VOUT drops below 92.5% of its nominal set voltage.

## Synchronization Input (SYNC)

The EV kit's SYNC PC pad can be used to synchronize the MAX5089 with an external digital clock in the 200kHz to 2.2MHz range. When SYNC is driven with an external digital clock, the MAX5089 synchronizes to the rising edge of the external clock. The SYNC pin is shorted to SGND in the EV kit by a 0 Ω resistor, R10. To use the SYNC feature remove resistor R10. Short the SYNC pin to SGND (resistor R10 = 0 Ω ) when SYNC is not used. Leaving the high-impedance pin SYNC unconnected can cause the converter to oscillate.

## Setting the Switching Frequency (OSC)

The MAX5089 EV kit's switching frequency can be reconfigured by selecting an appropriate value for resistor R5. Use the following equation to select a new value for resistor R5:

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5089 Evaluation Kit

<!-- formula-not-decoded -->

where, fSW is the desired switching frequency in Hertz. Configuring the MAX5089 EV kit's switching frequency to a new value may require replacing inductor L1, and/or capacitors C2, C7, and C11. To select appropriate values for these components, refer to the Applications Information and Oscillator/Synchronization (SYNC)/Clock Output  (CLKOUT) sections  in  the  MAX5089  IC data sheet.

## Compensation Network

The MAX5089 IC provides the flexibility of externally compensating its internal error amplifier to achieve stability  for  various applications. The MAX5089 EV kit circuit  is  compensated by appropriately choosing values for  resistors  R1,  R2,  R3,  R4,  and  capacitors  C3,  C4, and C5. To reconfigure the compensation network for specific requirements, refer to the Compensation section in the MAX5089 IC data sheet.

## Evaluating the MAX5088

The MAX5089 EV kit can also evaluate the MAX5088 in a buck converter configuration. The MAX5088 is a nonsynchronous buck converter and uses a low forwarddrop Schottky for rectification. The MAX5089 IC must be replaced with the MAX5088 IC. Refer to the MAX5088 IC data sheet for detailed information about this part. See Table 2 for a list of components that may need removal and replacement when evaluating the MAX5088 IC.

## Table 2. Component Replacement for Evaluating the MAX5088

| COMPONENT DESIGNATION   | DESCRIPTION               |
|-------------------------|---------------------------|
| R6                      | Not installed-remove      |
| N1                      | Not installed-remove      |
| D2                      | Not installed-remove      |
| D3                      | Diodes Inc B340LB-install |

## MAX5089 Evaluation Kit

Figure 1. MAX5089 EV Kit Schematic

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 2. MAX5089 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 4. MAX5089 EV Kit PC Board Layout-GND Layer 2

<!-- image -->

## MAX5089 Evaluation Kit

Figure 3. MAX5089 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 5. MAX5089 EV Kit PC Board Layout-GND Layer 3

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5089 Evaluation Kit

Figure 6. MAX5089 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600