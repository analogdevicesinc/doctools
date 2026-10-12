<!-- lastmod 2022-08-04 -->
## General Description

The MAX5080 evaluation kit (EV kit) is a fully assembled and tested circuit board that evaluates the MAX5080 PWM/PFM step-down converter IC with an integrated high-side switch. The MAX5080 EV kit operates over a wide 4.5V to 40V input voltage range and provides up to 1A at the 3.3V output.

The MAX5080 internal switching frequency is set to 250kHz. The MAX5080 normally operates as a PWM converter and automatically switches to PFM mode at light loads to improve efficiency. The MAX5080 features a SYNC input to provide external frequency synchronization for noise-sensitive applications. The EV kit features PC board pads to evaluate the SYNC and ON/ OFF features of the MAX5080. The MAX5080 can operate over the automotive -40°C to +125°C temperature range. The MAX5080 step-down converter is suitable for FireWire ® , automotive, and point-of-load applications.

FireWire is a registered trademark of Apple Computer, Inc.

| DESIGNATION   |   QTY | DESCRIPTION                                                          |
|---------------|-------|----------------------------------------------------------------------|
| C1, C2, C11   |     3 | 0.1µF ±10%, 50V X7R ceramic capacitors (0603) TDK C1608X7R1H104K     |
| C3            |     1 | 47µF ±20%, 6.3V X5R ceramic capacitor (1206) Murata GRM31CR60J476M   |
| C4            |     1 | 10µF ±20%, 50V X5S ceramic capacitor (1812) Taiyo Yuden UMK432C106M  |
| C5            |     1 | 6800pF ±10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H682K  |
| C6            |     1 | 0.047µF ±10%, 25V X7R ceramic capacitor (0603) Murata GRM188R71E473K |
| C7            |     1 | 0.022µF ±10%, 50V X7R ceramic capacitor (0603) TDK C1608X7R1H223K    |

## MAXIM

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                        |
|---------------|-------|--------------------------------------------------------------------|
| C8            |     1 | 820pF ±10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H821K |
| C9            |     1 | 0.47µF ±10%, 10V X5R ceramic capacitor (0603) TDK C1608X5R1A474K   |
| C10           |     1 | 1µF ±10%, 10V X5R ceramic capacitor (0603) TDK C1608X5R1A105K      |
| D1            |     1 | 150mA, 100V Schottky diode (SOD-123) Vishay BAT46W                 |
| D2            |     1 | 2A, 60V Schottky diode (SMB) Diodes Inc. B260                      |
| L1            |     1 | 47µH, 2.1A inductor Sumida CDRH104R-470                            |
| R1            |     1 | 6.81k Ω ±1% resistor (0603)                                        |
| R2            |     1 | 4.02k Ω ±1% resistor (0603)                                        |
| R3            |     1 | 1.4M Ω ±1% resistor (0603)                                         |
| R4            |     1 | 604k Ω ±1% resistor (0603)                                         |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

<!-- image -->

## Features

- ♦ 4.5V to 40V Input Voltage Range
- ♦ 3.3V, 1A, 250kHz Step-Down Converter
- ♦ Internal High-Side Switch
- ♦ High Efficiency Up to 90%
- ♦ Automatic PWM/PFM Mode
- ♦ Power-On/Off Control Logic
- ♦ Overcurrent and Thermal Protection
- ♦ Automotive Operating Temperature Range
- ♦ Tiny 5mm x 5mm, 16-Pin TQFN Package
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE    | IC PACKAGE       |
|--------------|---------------|------------------|
| MAX5080EVKIT | 0°C to +70°C* | 16 Thin QFN-EP** |

## MAX5080 Evaluation Kit

| DESIGNATION   |   QTY | DESCRIPTION                 |
|---------------|-------|-----------------------------|
| R5            |     1 | 187 Ω ±1% resistor (0603)   |
| R6            |     1 | 1 Ω ±5% resistor (0603)     |
| R7            |     1 | 3.01k Ω ±1% resistor (0603) |
| R8            |     1 | 10k Ω ±5% resistor (0603)   |

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                 |
|---------------|-------|---------------------------------------------|
| R9            |     0 | Not installed, resistor (0603)              |
| U1            |     1 | MAX5080ATE (16-pin thin QFN- EP, 5mm x 5mm) |
| None          |     1 | MAX5080 EV kit board                        |

## Component Suppliers

| SUPPLIER    | PHONE        | FAX          | WEBSITE               |
|-------------|--------------|--------------|-----------------------|
| Diodes Inc. | 805-446-4800 | 805-446-4850 | www.diodes.com        |
| Murata      | 770-436-1300 | 770-436-3030 | www.murata.com        |
| Sumida      | 847-545-6700 | 847-545-6720 | www.sumida.com        |
| Taiyo Yuden | 800-348-2496 | 847-925-0899 | www.t-yuden.com       |
| TDK         | 847-803-6100 | 847-390-4405 | www.component.tdk.com |
| Vishay      | -            | -            | www.vishay.com        |

Note: Indicate that you are using the MAX5080 when contacting these component suppliers.

## Quick Start

## Recommended Equipment

- 40V adjustable, 2A power supply
- Electronic load capable of sinking up to 1A (e.g., HP 6060B)
- One digital voltmeter

The MAX5080 EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed.

- 1) Connect the power-supply positive terminal to the VIN PC board pad on the EV kit. Connect the powersupply ground terminal to the PGND PC board pad.
- 2) Connect the positive terminal of the electronic load to the VOUT PC board pad on the EV kit board. Connect the ground terminal of the electronic load to the PGND PC board pad.
- 3) Connect a digital voltmeter across the VOUT and PGND PC board pads.
- 4) Turn on the power supply.
- 5) Set the power-supply voltage to 10V.
- 6) Enable the 1A electronic load.
- 7) Verify that the voltmeter measures 3.3V.

## Detailed Description

The MAX5080 EV kit circuit uses a MAX5080 step-down converter IC (U1) to implement a step-down DC-DC converter circuit. The MAX5080 EV kit operates over a wide 4.5V to 40V input voltage range and is configured to  provide 3.3V at up to 1A of output current. The MAX5080 step-down converter IC features an internal high-side low RDS(ON) MOSFET to achieve higher efficiency and lower overall system cost. The MAX5080 converter achieves high efficiency by automatically switching from PWM to PFM mode at light loads. The MAX5080 SYNC input can be used to synchronize the converter with an external digital clock. The MAX5080 features overcurrent shutdown, undervoltage lockout, and thermal shutdown.

## Configuring the Output Voltage (VOUT)

The MAX5080 EV kit step-down converter output voltage is configured to 3.3V by resistors R1 and R2. The EV kit's output voltage, VOUT, can be reconfigured in the 1.25V to 28V range by replacing resistor R2. To select a new value for resistor R2, refer to the Compensation Design section in the MAX5080 IC data sheet. Use the following equation to reconfigure the output voltage to the desired value:

<!-- formula-not-decoded -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

where, VOUT is the desired output voltage in volts and R1 is typically 6.81k Ω .

Reconfiguring the MAX5080 EV kit for a new output voltage may require replacing inductor L1, capacitors C3 and/or C4. To select a new value for inductor L1 or capacitors C3 and C4, refer to the Inductor Selection , Output Capacitor Selection, and Input Capacitor Selection sections, respectively, in the MAX5080 IC data sheet.

## Configuring the Undervoltage Lockout (UVLO)

The MAX5080 EV kit UVLO threshold is configured to 4.1V with resistors R3 and R4. The MAX5080 turns on when the input voltage VIN is above 4.1V and ON/ OFF is 1.23V or more. The UVLO threshold can be reconfigured to a desired value above 4.1V by appropriately selecting resistors R3 and R4. To reconfigure the UVLO threshold use the following equation:

<!-- formula-not-decoded -->

where resistor R4 should be in the 100k Ω to 600k Ω range and VUVLO is the desired UVLO threshold in volts.

The MAX5080 features a default 4.1V internal UVLO threshold. Connect the ON/ OFF PC board pad to VIN PC board pad for always-on operation.

<!-- image -->

## MAX5080 Evaluation Kit

## Synchronization Input (SYNC)

The MAX5080 EV kit circuit is set to a fixed 250kHz switching frequency by connecting the SYNC pin to GND through resistor R8. The EV kit's SYNC PC board pad can be used to synchronize the MAX5080 with an external digital  clock  in  the  150kHz  to  350kHz  range. When SYNC is driven with an external digital clock, the MAX5080 synchronizes to the rising edge of the external clock.

## Compensation Network

The MAX5080 IC provides the flexibility of externally compensating its internal error amplifier to achieve stability for various applications. The MAX5080 EV kit circuit is compensated by appropriately choosing values for  resistors  R1,  R5,  R7,  and  capacitors  C5,  C7,  and C8. To reconfigure the compensation network for specific  requirements, refer to the Compensation Design section in the MAX5080 IC data sheet.

## Evaluating MAX5081/MAX5082/MAX5083

The MAX5080 EV kit can also evaluate the MAX5081, MAX5082, or MAX5083 step-down converters. The MAX5080 IC must be removed and replaced with the desired IC. Refer to  MAX5080/MAX5081  or MAX5082/MAX5083 IC data sheets for detailed information about these parts. Some of the EV kit's components  may  need  replacement  when  evaluating MAX5081, MAX5082, or MAX5083 ICs.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5080 Evaluation Kit

Figure 1.  MAX5080 EV Kit Schematic

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 2.  MAX5080 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 4.  MAX5080 EV Kit PC Board Layout-GND Layer 2

<!-- image -->

## MAX5080 Evaluation Kit

Figure 3.  MAX5080 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 5.  MAX5080 EV Kit PC Board Layout-GND Layer 3

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5080 Evaluation Kit

Figure 6. MAX5080 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

6