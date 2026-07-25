<!-- lastmod 2022-08-04 -->
## General Description

The MAX5035 evaluation kit (EV kit) is a fully assembled and tested surface-mount printed circuit board (PCB) that  contains a step-down DC-DC switching-regulator circuit.  The  circuit  utilizes  a  MAX5035  adjustable  converter configured for a 5V output and provides up to 1A of  current.  The  converter operates from a wide input range of 8V to 76V.

The MAX5035 MAXPower IC features a built-in highside switch and an automatic pulse-skipping mode operation. The MAX5035 EV kit demonstrates low quiescent current and high efficiency up to 92%. The MAX5035 MAXPower IC switches at 125kHz.

Warning: The MAX5035 EV kit is designed to operate with high voltages. Dangerous voltages are present on this  EV  kit  and  on  equipment  connected to it. Users who power up this EV kit or power the sources connected to it must be careful to follow appropriate safety procedures when working with high-voltage electrical equipment.

Under severe fault or failure conditions, this EV kit may dissipate large amounts of power, which could result in the mechanical ejection of a component or of component debris at high velocity. Operate this EV kit with care to avoid possible personal injury.

| DESIGNATION   |   QTY | DESCRIPTION                                                                                           |
|---------------|-------|-------------------------------------------------------------------------------------------------------|
| C1            |     1 | 68µF ±20%, 100V electrolytic capacitor (12.5 x 13.5) Panasonic EEVFK2A680Q                            |
| C2            |     1 | 68µF ±20%,10Vtantalum capacitor (C) AVX TPSD686M010R0100 (0.100 ESR) or Vishay594D686X0010C2T(0.1ESR) |
| C3, C4        |     2 | 0.1µF ±10%, 50V X7R ceramic capacitors (0603) TDK C1608X7R1H104K                                      |
| C5            |     0 | Not installed, capacitor (0805)                                                                       |
| C6            |     1 | 0.2µF ±10%, 100V X7R ceramic capacitor (1206) AVX 12061C224KAZ                                        |

- ♦ 8V to 76V Input Voltage Range
- ♦ 5V Output at Up to 1A
- ♦ 92% Efficiency
- ♦ Adjustable Output Voltage Through Resistive Voltage-Divider
- ♦ No Load Quiescent Current:

794µA at VIN = 76V 582µA at VIN = 42V

392µA at VIN = 12V

- ♦ 125kHz Switching Frequency
- ♦ Automatic Pulse-Skipping Mode
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE   | IC-PACKAGE   |
|--------------|--------------|--------------|
| MAX5035EVKIT | 0°C to +70°C | 8 SO         |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                       |
|---------------|-------|-------------------------------------------------------------------|
| D1            |     1 | 80V, 5A Schottky diode (D0-204AR) International Rectifier 50SQ080 |
| L1            |     1 | 100µH, 1.8A inductor Coilcraft, Inc. DO5022P-104                  |
| R1            |     1 | 41.2k Ω ±1% resistor (0805)                                       |
| R2            |     1 | 13.3k Ω ±1% resistor (0805)                                       |
| R3            |     1 | 130k Ω ±1% resistor (0805)                                        |
| R4            |     0 | Not installed, resistor (0805)                                    |
| R5            |     1 | 45.3k Ω ±1% resistor (0603)                                       |
| U1            |     1 | MAX5035DUSA (8-pin SO)                                            |
| JU1           |     1 | 3-pin header                                                      |
| -             |     1 | Shunt (JU1)                                                       |
| -             |     1 | PCB: MAX5035 evaluation kit                                       |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

<!-- image -->

Features

## MAX5035 Evaluation Kit

## Component Suppliers

| SUPPLIER                | PHONE        | FAX          | WEBSITE               |
|-------------------------|--------------|--------------|-----------------------|
| AVX Corp.               | 843-946-0238 | 843-626-3123 | www.avxcorp.com       |
| Coilcraft, Inc.         | 847-639-6400 | 847-639-1469 | www.coilcraft.com     |
| International Rectifier | 310-322-3331 | 310-726-8721 | www.irf.com           |
| Panasonic Corp.         | 714-373-7366 | 714-737-7323 | www.panasonic.com     |
| TDK Corp.               | 847-803-6100 | 847-390-4405 | www.component.tdk.com |
| Vishay                  | 402-563-6866 | 402-563-6296 | www.vishay.com        |

Note: Indicate that you are using the MAX5035 when contacting these component suppliers.

## Quick Start

The MAX5035 EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed .

## 5V Output Verification

- 1) Verify that a shunt is across pins 1 and 2 of jumper JU1 ( SHDN ).
- 2) Connect a voltmeter to the VOUT pad and GND pad.
- 3) Connect a 12V DC power supply to the VIN pad. Connect the supply ground to the GND pad.
- 4) Turn on the power supply and verify that VOUT is at 5V.

For instructions on selecting the feedback resistors for other output voltages, see the Evaluating Other Output Voltages section.

## Detailed Description

The MAX5035 EV kit features a 5W step-down DC-DC switching-regulator circuit. The circuit uses a MAX5035 adjustable output-voltage converter to provide an output voltage of 5V and can deliver up to 1A of current to the output. The user must provide an 8V to 76V DC source that is capable of supplying at least 2A of current to power the circuit.

The MAX5035 converter's built-in, high-side, low onresistance DMOS transistor reduces component count while maximizing efficiency. Under light loads (approxi- mately 85mA) the MAX5035 operates in pulse-skipping mode, and under heavy loads it automatically enters PWM mode. The circuit switches at 125kHz.

The EV kit features a PCB pad for the SHDN signal to interface with an external controller. Startup delays can be evaluated by installing resistor R4 and capacitor C5.

## Jumper Selection

## Shutdown Mode

The MAX5035 EV kit features a shutdown mode that reduces the MAX5035 quiescent current to 10µA (typ), thus reducing the power drain during shutdown mode. The 3-pin jumper, JU1, selects the shutdown mode for the MAX5035 EV kit. Table 1 lists the selectable jumper options.

## Table 1. Jumper JU1 Functions

| SHUNT LOCATION   | SHDN PIN                                  | MAX5035 EV KIT OUTPUT                      |
|------------------|-------------------------------------------|--------------------------------------------|
| 1 and 2          | Connected to VIN through R3               | MAX5035 enabled                            |
| 2 and 3          | Connected to GND                          | MAX5035 disabled                           |
| None             | External controller connected to SHDN pad | Logic high = enabled, Logic low = disabled |

Caution: Do not connect an external controller to the SHDN pad while a shunt is on jumper JU1 since the external controller may be damaged.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Evaluating Other Output Voltages

The MAX5035 step-down DC-DC switching regulator output is set to 5V by feedback resistors R1 and R2. To generate output voltages other than 5V (1.25V to 12V), select different external voltage-divider resistors for R1 and R2. Refer to the Setting the Output Voltage section in the MAX5035 data sheet for instructions on selecting the resistors. The minimum input voltage for a given output voltage is maximum duty-cycle dependent for that input voltage. Refer to the MAX5035 data sheet for additional information.

## Startup Delays/ Sequencing Two DC-DC Converters

The MAX5035 EV kit can be configured for various startup delays. To evaluate a startup delay, cut open the PCB trace shorting resistor R4 and install the desired surface-mount resistor (0805 case). Capacitor C5 (0805 case) must also be selected and installed. Refer to the MAX5035 data sheet's Shutdown Mode and Undervoltage Lockout (UVLO) sections to select values for resistor R4 and capacitor C5.

## MAX5035 Evaluation Kit

The MAX5035 EV kit's startup delay can also be utilized to sequence two MAX5035 EV kits. Components R4EVKIT1, R4EVKIT2, C5EVKIT1 and C5EVKIT2 determine the startup delay between the two EV kits. The following equation can be used to select values for R4 and C5:

<!-- image -->

where Time\_delay is the desired startup delay time, VSHUT\_DOWN is the desired startup voltage at the SHDN pad on the EV kit and 1.69V (typ) is the on/off threshold voltage of the MAX5035.

<!-- image -->

Figure 1. MAX5035 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Evaluates:  MAX5035

## MAX5035 Evaluation Kit

Figure 2. MAX5035 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 4. MAX5035 EV Kit PCB Layout-Solder Side

<!-- image -->

## Revision History

Pages changed at Rev 1: 1-4

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

Figure 3. MAX5035 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 5. MAX5035 EV Kit Component Placement GuideSolder Side

<!-- image -->