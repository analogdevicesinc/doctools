<!-- lastmod 2022-08-03 -->
## General Description

The MAX5926 evaluation kit (EV kit) is designed to evaluate the MAX5926 hot-swap controller. The hot-swapped supply (VS) has a range of 1V to 13.2V provided that the device supply (VCC) is at or above 2.25V and VS does not exceed VCC.

The current-trip setting is approximately 6A for a full load 5A system. The actual current-trip setting is dependent on temperature as well as the tolerances of RCB, RCBF, ICB, VCB\_OS, and RDS(ON).

The MAX5926 EV kit was conveniently designed with jumpers to activate the enables (EN1, EN2 ),  fault  management (LATCH), temperature coefficient tracking (TC), adjustable output slew rate (SLEW), and power-up shortcircuit detection (SC\_DET).

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                     |
|---------------|-------|-----------------------------------------------------------------|
| C1, C4        |     2 | 150µF, 16V through-hole electrolytic capacitors Sanyo 16MV150AX |
| C2A, C3       |     1 | 0.1µF, 50V X7R ceramic capacitors (0805) TDK C2012X7R1H104K     |
| C2B           |     1 | 1µF, 25V X7R ceramic capacitor (0805) TDK C2012X7R1E105K        |
| D1            |     1 | 5A, 40V Schottky diode (SMC) Central Semiconductor CMSH5-40     |
| JU1-JU7       |     7 | 3-pin headers                                                   |
| JU8           |     1 | 2-pin header                                                    |
| N1            |     1 | 5m Ω n-channel MOSFET International Rectifier IRF7822           |
| R1            |     1 | 0 Ω resistor (2512) IRC LRC-LRZ-2512-R000                       |
| R2            |     1 | 750 Ω ±1% resistor (0805)                                       |
| R3            |     1 | 0 Ω resistor (0805)                                             |
| R4, R5        |     2 | 20k Ω ±5% resistors (0805)                                      |
| R6            |     1 | 5k Ω ±5% resistor (0805)                                        |
| R7, R8, R9    |     0 | Not installed, resistors (0603)                                 |
| U1            |     1 | MAX5926EEE (16-pin QSOP-EP)                                     |
| -             |     8 | Shunts                                                          |
| -             |     1 | PCB: MAX5926 Evaluation Kit                                     |

## Recommended Equipment

- 5VDC power supply (10A-rated, fast dI/dt to ensure solid VS rail)
- One oscilloscope and voltage probe

## Procedure

The MAX5926 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supplies until all connections are completed.

- 1) Ensure the EN1 jumper (JU1) is connected in the 'OFF' setting in order to disable the MAX5926. See Figure 2 to see the silkscreen for all of the jumper labels on the MAX5926 EV kit board.
- 2) Ensure the EN2 jumper (JU2) is connected in the 'ON' setting in order to enable the MAX5926.
- 3) Ensure the LATCH jumper (JU3) is connected in the 'LATCH' setting in order to enable latch mode.
- 4) Ensure the TC\_SEL jumper (JU4) is connected in the '3300ppm/°C' setting in order to set the temperature coefficient to 3300ppm/°C.
- 5) Ensure that jumper JU5 is connected in the 'NO RSENSE' setting in order to configure the EV kit for use without a sense resistor.
- 6) Ensure that jumper JU6 is connected in the '3V/ms' setting in order to adjust the slew rate to 3V/ms.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

<!-- image -->

Features

- ♦ VS Voltage Range: 1V to VCC

- ♦ VCC Voltage Range: 2.25V to 13.2V

- ♦ No RSENSE Required

- ♦ Tracks RDS(ON) Over Temperature

- ♦ Latch Mode

- ♦ Adjustable Slew Rate

- ♦ Short-Circuit Detection

- ♦ Power-Good Output

## Ordering Information

| PART         | TEMP RANGE    | IC PACKAGE   |
|--------------|---------------|--------------|
| MAX5926EVKIT | 0°C to +70°C* | 16 QSOP-EP** |

## Quick Start

## MAX5926 Evaluation Kit

## Component Suppliers

| SUPPLIER                | PHONE        | WEBSITE               |
|-------------------------|--------------|-----------------------|
| Central Semiconductor   | 631-435-1110 | www. centralsemi.com  |
| IRC                     | 361-992-7900 | www.irctt.com         |
| International Rectifier | 310-322-3331 | www.irf.com           |
| SANYO Electronic Device | 619-661-6835 | www. sanyodevice.com  |
| TDK Corp.               | 847-803-6100 | www.component.tdk.com |

Note:

Indicate that you are using the MAX5926 when contacting these component suppliers.

- 7) Ensure that jumper JU7 is connected in the 'SCD ON' setting in order to enable short-circuit detection  mode. The 'SCD ON' stands for short-circuit detect.
- 8) Ensure a shunt is placed across pins 1-2 of jumper JU8 to electrically connect VS to VCC.
- 9) Connect the oscilloscope probe to VOUT and connect the ground lead to GND.
- 10) Connect the 5VDC power supply across the VS pad and the GND pad nearest VS.
- 11) Turn on the 5V power supply.
- 12) Set the EN1 jumper (JU1) in the 'ON' setting in order to enable the MAX5926.
- 13) Set up the oscilloscope to trigger at 300mV.
- 14) Observe  the  output  slew  rate  (SR)  of  3V/ms. (I INRUSH = C1 x SR).

## Detailed Description

The MAX5926 EV kit demonstrates the hot-swap/inrush current limiting and overcurrent protection features of the MAX5926. Additionally, by using the on-board jumpers, the user can enable the MAX5926, set latch off or autoretry fault management, set the circuit-breaker temperature coefficient, and adjust the output slew rate. This EV kit can use either a sense resistor or the RDS(ON) of the MOSFET to provide overcurrent protection.

## Jumper Selection

The MAX5926 EV kit supports both active-high and active-low enable logic. Table 1 shows the jumper JU1 settings for  the  active-high  EN1  control  input. Table 2 shows the jumper JU2 settings for the active-low EN2 control input.

The EV kit also allows the user to set fault management to  either  off  or  autoretry  mode.  In  latched  mode,  pull EN1 low for 100µs to clear a latched fault and restart the MAX5926. In autoretry mode, the device restarts after  the  autoretry  delay,  tDELAY.  Table 3 shows the jumper JU3 settings for latch or autoretry mode. See the MAX5926 data sheet for more details.

The MAX5926 EV kit uses the RDS(ON) of the MOSFET as a sense resistor for overcurrent protection. The RDS(ON) of the MOSFET has a temperature coefficient. The MAX5926 EV kit gives the user the choice of tracking the MOSFET's temperature coefficient. Table 4 shows the jumper JU4 settings to set the MAX5926's temperature coefficient to either 3300ppm/°C or their own 0ppm/°C.

The on-board 0 Ω sense resistor is equivalent to a wide PCB trace and is a component place holder for the user to insert a desired sense resistor when the RDS(ON) of the MOSFET is used as a sense resistor. Table 5 shows the jumper JU5 settings to configure the MAX5926 EV kit for use with a sense resistor or using the RDS(ON) of the MOSFET as a sense resistor.

The MAX5926 EV kit allows an adjustable output-voltage slew rate to program inrush current. Table 6 shows the jumper JU6 settings to set the slew rate to either 3V/ms or 0.3V/ms. Refer to the MAX5926 IC data sheet for more details on calculating C2 for a different slew rate.

Short-circuit detection must be used on the MAX5926 EV kit when no RSENSE is used, and must not be used when an RSENSE is used. Table 7 shows the jumper JU7 settings to enable or disable short-circuit detection mode.

By default, the MAX5926 EV kit connects the hotswapped supply (VS) to the device supply (VCC). Many power supplies do not have a source impedance low enough even if rated for a large enough current. For this reason, voltage glitches can occur on VCC if connected to VS. Separate VCC from VS if this is the case. Table 8 shows the jumper JU8 settings to disconnect VS from VCC. Note that VS must not exceed VCC.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Table 1. EN1 Control Input

| JUMPER   | PCB SILKSCREEN   | SHUNT POSITION   | DESCRIPTION                                                     |
|----------|------------------|------------------|-----------------------------------------------------------------|
| JU1      | On               | 1-2              | MAX5926 is enabled only when JU2 is also connected to pins 2-3. |
| JU1      | Off              | 2-3*             | MAX5926 is disabled.                                            |

* Default position.

## Table 2. EN2 Control Input

| JUMPER   | PCB SILKSCREEN   | SHUNT POSITION   | DESCRIPTION                                                     |
|----------|------------------|------------------|-----------------------------------------------------------------|
| JU2      | Off              | 1-2              | MAX5926 is disabled                                             |
| JU2      | On               | 2-3*             | MAX5926 is enabled only when JU1 is also connected to pins 1-2. |

* Default position.

Table 3. Latch/Autoretry Input

| JUMPER   | PCB SILKSCREEN   | SHUNT POSITION   | DESCRIPTION                                                                                      |
|----------|------------------|------------------|--------------------------------------------------------------------------------------------------|
| JU3      | LATCH            | 1-2*             | Enable latch mode. The on-board MOSFET is latched off after the current trip setting is reached. |
| JU3      | AUTO             | 2-3              | Enable autoretry mode.                                                                           |

* Default position.

Table 4. Temperature Coefficient Selection Input

| JUMPER   | PCB SILKSCREEN   | SHUNT POSITION   | DESCRIPTION                              |
|----------|------------------|------------------|------------------------------------------|
| JU4      | 0ppm             | 1-2              | MAX5926 temp coefficient = 0ppm/ ° C.    |
| JU4      | 3300ppm          | 2-3*             | MAX5926 temp coefficient = 3300ppm/ ° C. |

* Default position.

Table 5. Sense Resistor Mode (SENSE)

| JUMPER   | PCB SILKSCREEN   | SHUNT POSITION   | DESCRIPTION                                                                                          |
|----------|------------------|------------------|------------------------------------------------------------------------------------------------------|
| JU5      | No R SENSE       | 1-2*             | The R DS(ON) of the MOSFET is being used as the sense resistor. No external sense resistor required. |
| JU5      | With R SENSE     | 2-3              | Install a sense resistor in the R1 component location.                                               |

<!-- image -->

## MAX5926 Evaluation Kit

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5926 Evaluation Kit

## Table 6. Slew-Rate Adjustment (SLEW)

| JUMPER   | PCB SILKSCREEN   | SHUNT POSITION   | DESCRIPTION           |
|----------|------------------|------------------|-----------------------|
| JU6      | 3V/ms            | 1-2*             | Slew rate = 3V/ms.    |
| JU6      | 0.33V/ms         | 2-3              | Slew rate = 0.33V/ms. |

## Table 7. Short-Circuit Detection Mode (SC\_DET)

| JUMPER   | PCB SILKSCREEN   | SHUNT POSITION   | DESCRIPTION                                                    |
|----------|------------------|------------------|----------------------------------------------------------------|
| JU7      | SCD OFF          | 1-2              | Disable short-circuit detection mode (with R SENSE ).          |
| JU7      | SCD ON           | 2-3*             | Enable short-circuit detection mode at power-up (no R SENSE ). |

* Default position.

## Table 8. Connecting VS to VCC

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                |
|----------|------------------|--------------------------------------------|
| JU8      | 1-2              | VS = VCC. Electrically connected together. |
| JU8      | Open             | VS and VCC are electrically separated.     |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5926 Evaluation Kit

<!-- image -->

Figure 1. MAX5926 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5926 Evaluation Kit

<!-- image -->

Figure 2. MAX5926 EV Kit Component Placement GuideComponent Side

Figure 3. MAX5926 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX5926 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

6