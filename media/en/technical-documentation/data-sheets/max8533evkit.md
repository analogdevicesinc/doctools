<!-- lastmod 2022-08-03 -->
## General Description

The MAX8533 evaluation kit (EV kit) is a fully assembled and tested surface-mount circuit board demonstrating the MAX8533 to be a versatile, single-port, 12V, Infiniband™ (IB)-compliant hot-swap controller. The MAX8533 integrates several features that allow for reliable insertion and removal of the circuit card as well as real-time fault protection of abnormal occurrences. The MAX8533 allows for an adjustable soft-start ramp during turn-on of the input voltage while providing overcurrent protection. It also provides accurate and consistent current-regulated outputs for a programmable period of time to  latchoff  and  soft-start  in  the  presence  of  overcurrent (OC) conditions. Additionally, it provides a second level of severe overcurrent (SOC) protection by responding to a dead short in 100ns.

The MAX8533 EV kit incorporates a power-good (POK) open-drain output that can easily be pulled up to the input  voltage  or  to  another  logic  level  using  a  jumper. Two enable inputs, EN (logic enable) and LPEN (local power enable), provide flexible sequencing.

The MAX8533 EV kit comes with an edge-card connector backplane board that is used to verify the hot-swap function.

| DESIGNATION   |   QTY | DESCRIPTION                                                            |
|---------------|-------|------------------------------------------------------------------------|
| C1            |     1 | 470µF, 25V aluminum electrolytic capacitor Sanyo 25MV470HC             |
| C2            |     1 | 0.1µF ±10%, 25V X5R ceramic capacitor (0603) Taiyo Yuden TMK107BJ104KA |
| C3            |     1 | 0.01µF ±10%, 50V X7R ceramic capacitor (0603) TDK C1608X7R1H103K       |
| C4            |     1 | Not installed                                                          |
| C5            |     1 | 0.22µF ±10%, 10V X5R ceramic capacitor (0603) TDK C1608X5R1A224K       |
| C6            |     1 | 10µF ±20%, 16V X7R ceramic capacitor (1812) TDK C4532X7R1C106M         |
| C7            |     1 | 100µF ±20%, 16V tantalum capacitor Kemet T495D107M016AS                |

InfiniBand is a trademark of InfiniBand Trade Association.

<!-- image -->

## Features

- ♦ 12V Hot-Swap Controller for 25W or 50W Applications
- ♦ Programmable Overcurrent Protection
- ♦ EN and LPEN Inputs for Flexible Sequencing
- ♦ Power-Good Output
- ♦ Adjustable Turn-On Ramp
- ♦ 16V Absolute Maximum Rating
- ♦ Soft-Start Overcurrent Protection During Turn-On
- ♦ Undervoltage Lockout
- ♦ Timed Current-Regulation Period (Optional)
- ♦ 100ns IC Response Time to Output Dead Short
- ♦ Adjustable Overvoltage Protection
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE   |
|--------------|--------------|--------------|
| MAX8533EVKIT | 0°C to +70°C | 10 µMAX      |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                           |
|---------------|-------|-----------------------------------------------------------------------|
| J1            |     1 | 6-dual-position card-edge connector Sullins EZM06DRXH                 |
| JU1           |     1 | 3-pin header Sullins PTC36SAAN                                        |
| N1            |     1 | N-channel MOSFET 30V, V GS = 20V Vishay/Siliconix SI4842DY            |
| R1, R2        |     2 | 20m Ω ±1%, 0.5W current-sense resistors Vishay/Dale LRF1206-01-R020-F |
| R3            |     1 | 20 Ω ±5% resistor (0603)                                              |
| R4            |     1 | 3.09k Ω ±1% resistor (0603)                                           |
| R5            |     1 | 4.99k Ω ±1% resistor (0603)                                           |
| R6            |     1 | 31.6k Ω ± 1% resistor (0603)                                          |
| R7            |     1 | 100k Ω ±5% resistor (0603)                                            |
| TP1, TP2, TP3 |     3 | 1-pin headers Sullins PTC36SAAN                                       |
| U1            |     1 | MAX8533EUB                                                            |
| None          |     1 | MAX8533 EV kit PC board                                               |
| None          |     1 | MAX8533 backplane PC board                                            |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX8533 Evaluation Kit

## Component Suppliers

| SUPPLIER         | COMPONENT               | PHONE        | WEBSITE                  |
|------------------|-------------------------|--------------|--------------------------|
| Kemet            | Capacitors              | 864-963-6300 | www.kemet.com            |
| Panasonic        | Resistors               | 714-373-7366 | www.maco.panasonic.co.jp |
| Sanyo            | Capacitors              | 619-661-6835 | www.sanyo.com            |
| Taiyo Yuden      | Capacitors              | 408-573-4150 | www.t-yuden.com          |
| TDK              | Capacitors              | 888-835-6646 | www.component.tdk.com    |
| Vishay/Dale      | Current-Sense Resistors | 402-563-6866 | www.vishay.com           |
| Vishay/Siliconix | MOSFET                  | 402-563-6866 | www.vishay.com           |

Note: Please indicate that you are using the MAX8533 when contacting these suppliers.

## Recommended Equipment

Before you begin, you need the following equipment:

- 0 to +14V, 7A, variable-output power supply
- Dummy load capable of sinking 6A-7A
- Two digital multimeters (DMMs)

## Quick Start

The MAX8533 EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed:

- 1) Remove the MAX8533 EV kit from the backplane board.
- 2) Preset a power supply to zero and turn off the power supply.
- 3) Connect the positive lead of PS1 to the VIN pad on the backplane board. Connect the negative lead of the power supply to the GND connection on the backplane board.
- 4) Connect the EN pad on the backplane board to the GND pad. This enables the MAX8533.
- 5) Connect the positive input of one DMM (VVOUT) to the OUT pad on the MAX8533 EV kit board. Connect the negative input of the DMM to the GND pad on the MAX8533 EV kit board to measure the output voltage.
- 6) Connect the positive input of the second DMM to the POK pad on the MAX8533 EV kit board. Connect the negative input of the DMM to the GND pad on the MAX8533 EV kit board to measure the power-good signal (VPOK).
- 7) Verify JU1 is shorted between positions 1 and 2.

2

- 8) Turn on the power supply.
- 9) Plug the MAX8533 EV kit into the socket on the backplane board.
- 10) Set the power supply to +10V. Verify that the POK (VPOK) voltage and the VVOUT voltage read +10V.
- 11) Sweep the power-supply voltage from +10V to +14V. Verify that VVOUT and VPOK track the power supply over the entire input range.
- 12) Increase the power supply to +15V. Verify that VOUT and VPOK drop to zero due to overvoltage protection.
- 13) Set the power supply to +12V.
- 14) Pull  the  MAX8533 EV kit board out of the socket and plug it back in to reset the fault.
- 15) Verify that VVOUT is +12V.
- 16) Connect the 6A load between the VVOUT and GND pads on the MAX8533 EV kit board.
- 17) Verify  that  the  output  voltage  equals  VVIN  minus the voltage drop across the MOSFET and currentsense resistors, which is ~(VIN - 90mV).
- 18) Increase the load to 6A. Verify that VOUT drops to zero due to overcurrent protection.
- 19) Remove the load.
- 20) Verify that VVOUT remains at zero.
- 21) Pull  the  MAX8533 EV kit board out of the socket and plug it back in to reset the fault.
- 22) Verify that VVOUT is 12V.
- 23) Short OUT to GND. Verify that VOUT drops to zero and remains at zero after the short is removed.
- 24) Pull  the  MAX8533 EV kit board out of the socket and plug it back in to reset the fault.
- 25) Verify that VVOUT is +12V.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Detailed Description

## 50W/25W Operation

The MAX8533 EV kit is assembled for 50W application with the overcurrent protection set at 6.2A. Remove R2 to  use  the  MAX8533 EV kit in a 25W application. This changes the overcurrent protection to 3.1A.

## POK Output

The MAX8533 EV kit has a POK open-drain output that becomes high impedance when the output has reached 90% of its final value. The POK output can be pulled up to the input voltage or to the user's digital logic level (VDLL) using JU1.

## LPEN/EN

LPEN and EN are used to enable the MAX8533. Drive EN high or LPEN low to disable the MAX8533. Drive EN low and LPEN high or leave floating to enable the MAX8533.

## Soft-Start

The output for the MAX8533 increases to VVIN with a controlled soft-start  ramp to limit  inrush  current.  C2 is used to control the MOSFET turn-on ramp rate. Refer to the Setting the Turn-On Ramp Rate section in the MAX8533 data sheet for more details.

## Overcurrent Protection

The MAX8533 utilizes two schemes for overcurrent protection. The first scheme employs a programmable timeout that counts down once an overcurrent condition is sensed. During this time, the gate of the MOSFET is regulated to limit the current to the output. Once the timeout occurs, if the overcurrent condition still exists, the MOSFET is latched off. The current limit and timeout are programmable using R4 and C3, respectively. Refer to the Current-Limit and Overload Protection section of the MAX8533 data sheet for more details on setting the current limit.

<!-- image -->

## MAX8533 Evaluation Kit

The second scheme senses severe overload and shortcircuit  conditions.  The  MOSFET is latched off immediately when these conditions occur. Refer to the CurrentLimit and Overload Protection section of the MAX8533 data sheet for more details.

## Fault Condition Reset

After  entering a latched-off fault condition, reset the MAX8533 by toggling EN, LPEN, or the input power. The fault condition is also reset by removing the board from the backplane and then plugging it back in.

## Startup into Load

The MAX8533 is intended to be used in a circuit where no load is applied until the POK signal is enabled. In an application where the load is applied during the outputvoltage ramp-up, the RDS(ON) of the MOSFET is higher and the power dissipated by the MOSFET is larger. Repeated, rapid hot swaps into a load can create sufficient heat to exceed the power-dissipation limits of the package, causing failure of the MOSFET.

## Jumper Settings

## Table 1. JU1 (POK Pullup Voltage)

| JU1 POSITION   | POK                | FUNCTION                                                                 |
|----------------|--------------------|--------------------------------------------------------------------------|
| 1 and 2        | Connected to V IN  | Connects R7 to the input voltage                                         |
| 2 and 3        | Connected to V DLL | Connects R7 to the user's digital logic level connected to the DLL input |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8533 Evaluation Kit

Figure 1. MAX8533 EV Kit Schematic

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 2. MAX8533 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

Figure 4. MAX8533 EV Kit PC Board Layout-Solder Side

<!-- image -->

## MAX8533 Evaluation Kit

Figure 3. MAX8533 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 5. MAX8533 EV Kit Component Placement GuideBottom Silkscreen

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8533 Evaluation Kit

<!-- image -->

Figure 6. MAX8533 Backplane Component Placement GuideTop Silkscreen

Figure 7. MAX8533 Backplane PC Board LayoutComponent Side

<!-- image -->

Figure 8. MAX8533 Backplane PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600