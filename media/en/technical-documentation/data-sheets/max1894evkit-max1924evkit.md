<!-- lastmod 2022-08-05 -->
<!-- image -->

## General Description

The MAX1894 evaluation kit (EV kit) is a fully assembled and tested circuit board. It uses the MAX1894 lithiumion  (Li+)  battery-pack  protector  to  protect  four  series Li+ cell  battery  packs  against  overvoltage, undervoltage, excessive charge/discharge currents, and battery pack-short conditions. Three external P-channel MOSFETs control the charge and discharge paths of the battery pack. The MAX1894 EV kit provides two inputs, which can be used by a microcontroller (µC) to control the protection MOSFETs or put the MAX1894 in shutdown mode. The EV kit also evaluates the MAX1924.

| DESIGNATION        |   QTY | DESCRIPTION                                                                            |
|--------------------|-------|----------------------------------------------------------------------------------------|
| C1                 |     1 | 4.7µF ±20%, 6.3V X7R ceramic capacitor (0805) Taiyo Yuden JMK212BJ475MG                |
| C2, C12            |     2 | 0.1µF ±10%, 50V X7R ceramic capacitors (0805) Taiyo Yuden UMK212BJ104KG                |
| C3, C4             |     0 | 0.1µF to 1µF ±20%, 50V X7R ceramic capacitors (0805), not installed                    |
| C5                 |     1 | 1µF ±10%, 6.3V X5R ceramic capacitor (0603) TDK C1608X5R0J105K                         |
| C6, C7, C8         |     3 | 0.1µF ±10%,16V X7R ceramic capacitors (0603) Taiyo Yuden EMK107BJ104KA                 |
| C9                 |     1 | 2.2µF ±10%, 25V X7R ceramic capacitor (1206) TDK C3216X7R1E225K                        |
| C10, C11, C13, C14 |     0 | 0.1µF ±10%, 50V X7R ceramic capacitors (0805) Taiyo Yuden UMK212BJ104KG, not installed |
| D1                 |     1 | 100mA, 30V, Schottky diode, SOT23 Central Semiconductor CMPSH-3                        |

- ♦ Protects Against Cell Overvoltage
- ♦ Protects Against Cell Undervoltage
- ♦ Protects Against Excessive Charge/Discharge Currents and Pack-Short Conditions
- ♦ 0.8µA (typ) Shutdown Supply Current Prevents Deep Discharge of Cells
- ♦ Low Operating Supply Current, 30µA (typ)
- ♦ Small 16-Pin QSOP Package
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE   |
|--------------|--------------|--------------|
| MAX1894EVKIT | 0°C to +70°C | 16 QSOP      |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                        |
|---------------|-------|----------------------------------------------------------------------------------------------------|
| J1, J2        |     2 | Nonisolated banana jacks                                                                           |
| JU1, JU2, JU3 |     3 | 3-pin headers                                                                                      |
| JU4, JU5      |     2 | 2-pin headers                                                                                      |
| P1            |     1 | -0.13A, -50V, P-channel MOSFET, SOT23 Fairchild Semiconductor BSS84                                |
| P2, P3        |     2 | 8A, -30V, P-channelMOSFETs , 8-pinSO Vishay Siliconix Si4435DY or International Rectifier Si4435DY |
| R1            |     1 | 510 Ω ±5% resistor (2512)                                                                          |
| R2            |     1 | 0.02 Ω ±1%, 2W resistor (2512) IRC LRC-LRF 2512-01-R020-F                                          |
| R3            |     1 | 51 Ω ±5% resistor (0805)                                                                           |
| R4, R5, R6    |     3 | 1k Ω ±5% resistors (0805)                                                                          |
| R7            |     1 | 10 Ω ±5% resistor (0805)                                                                           |
| TB1           |     1 | 5-pin terminal block                                                                               |
| U1            |     1 | MAX1894XEEE, 16-pin QSOP                                                                           |
| U2            |     1 | MAX1615EUK-T, 5-pin SOT23                                                                          |
| None          |     5 | Shunts (JU1-JU5)                                                                                   |
| None          |     1 | MAX1894 PC board                                                                                   |
| None          |     1 | MAX1894 data sheet                                                                                 |
| None          |     1 | MAX1894 EV kit data sheet                                                                          |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

## Features

## MAX1894/MAX1924 Evaluation Kit

## Component Suppliers

| SUPPLIERS               | PHONE        | FAX          | WEBSITE               |
|-------------------------|--------------|--------------|-----------------------|
| Fairchild Semiconductor | 888-522-5372 | 972-910-8023 | www.fairchildsemi.com |
| International Rectifier | 310-322-3331 | 310-726-8721 | www.irf.com           |
| IRC                     | 361-992-7900 | 361-992-3377 | www.irctt.com         |
| Taiyo Yuden             | 800-348-2496 | 847-925-0899 | www.t-yuden.com       |
| TDK                     | 847-803-6100 | 847-390-4405 | www.component.tdk.com |
| Vishay Siliconix        | 408-988-8000 | 408-567-8979 | www.vishay.com        |

Note: Please indicate that you are using the MAX1894 or MAX1924 when contacting these component suppliers.

## Quick Start

The MAX1894 EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed.

## Recommended Equipment

-  Current-limited 25V power supply (or Li+ charger)
-  One voltmeter
-  Four Li+ cells (2.3V to 4.35V)

Warning: Exercise caution when handling loose Li+ cells. Obey all manufacturer guidelines for handling Li+ cells. For test purposes, floating power supplies can be substituted for the Li+ cells.

## Jumper Setting and Connecting the Li+ Cells

- 1) Install  a  shunt  across  pins  1  and  2  of  jumpers  JU1 and JU2
- 2) Install a shunt across pins 2 and 3 of jumper JU3.
- 3) Install a shunt across jumper JU4, and remove the shunt from jumper JU5.
- 4) See Figure 1 for connecting the Li+ cells (steps 5 to 12).
- 5) Connect the negative terminal of Li+ cell 1 to BN of terminal block TB1.
- 6) Connect the positive terminal of Li+ cell 1 to B1P of terminal block TB1.
- 7) Connect the negative terminal of Li+ cell 2 to B1P of terminal block TB1.
- 8) Connect the positive terminal of Li+ cell 2 to B2P of terminal block TB1.
- 9) Connect the negative terminal of Li+ cell 3 to B2P of terminal block TB1.
- 10) Connect the positive terminal of Li+ cell 3 to B3P of terminal block TB1.
- 11) Connect the negative terminal of Li+ cell 4 to B3P of terminal block TB1.
- 12) Connect the positive terminal of Li+ cell 4 to B4P of terminal block TB1.
- 13) Remove the shunt from pins 1 and 2 of jumper JU2 and install it across pins 2 and 3 of jumper JU2 (EV Kit ON).

Figure 1. Connecting the Li+ Cell, Power Supply, and Voltmeter

<!-- image -->

## Connecting the Power Supply

- 1) See Figure 1 for connecting the power supply (steps 2 and 4 below). The power supply should be current limited to no more than the C rate of the battery pack.
- 2) Using short banana leads, connect the negative terminal of the power supply to J2 (PACK-).
- 3) Turn on the power supply and set the power-supply voltage to 4.2V x the number of cells in series. Momentarily connect the positive terminal of the power supply to J1 (JACK+).
- 4) Remove the positive terminal of the power supply from PACK+, and verify that the DSO , CGO ,  and TKO pads are pulled low.
- 5) Momentarily short the PACK+ and PACK- pads with a short banana lead. Verify that the DSO , CGO , and TKO pads are pulled high.
- 6) Reconnect the positive terminal of the power supply to J1 (PACK+).

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1894/MAX1924 Evaluation Kit

- 7) Verify that the DSO , CGO , and TKO pads are pulled low.

Note:

Short leads are less than 6in long.

## Detailed Description

The MAX1894 EV kit protects Li+ battery cells against charge/discharge faults. The EV kit is designed for both 3- and 4-cell applications. It is configured from the factory for a 4-cell application with the MAX1894X i nstalled.  For  a  3-cell  application,  replace  the MAX1894X with the MAX1924V and reconfigure jumper JU5 (see Table 5). The EV kit monitors the voltage across each cell to provide protection against undervoltage and overvoltage conditions. The EV kit also monitors the voltage across the current-sense resistor (R2) to protect against excessive charge and discharge current, and pack short conditions.

The MAX1894 EV kit also features a MAX1615 lowpower linear regulator, configurable for 3.3V or 5V to power a µC. The linear regulator can provide 30mA for VIN up to 28V. The charge and discharge paths of the battery pack are controlled by three P-channel MOSFETs: the trickle-charge MOSFET P1, the overdischarge MOSFET P2, and the overcharge MOSFET P3. In  the  event  of  a  fault  condition,  some  or  all  of  these protection MOSFETs are turned off to disconnect the battery pack from the current path. The MAX1894 EV kit provides two logic-level inputs, which can be connected to general-purpose input/output (GPIO) lines from a µC. These inputs can be used to turn off all three protection MOSFETs, or put the MAX1894 in shutdown mode for minimizing the current consumption during pack storage.

## Trickle-Charge Operation

When the MAX1894 is in an undervoltage or deep discharge state (VCC &lt; 4.5V typ), the circuit operates in trickle-charge mode. During trickle-charge operation, MOSFETs P2 and P3 are turned off and MOSFET P1 is turned on to provide a lower current charge path for the battery pack. Refer to the Fast and Trickle-Charge Paths section in the MAX1894 data sheet.

## Normal Operation

When all cell voltages are greater than 2.36V, the MAX1894 EV kit operates in normal mode and can readily charge and discharge. During normal operation, all  three  MOSFETs (P1, P2, and P3) are turned on to provide a current path for the battery pack. The voltage across the current-sense resistor (R2) monitors the charge and discharge current during normal operation.

<!-- image -->

## Shutdown

The MAX1894 EV kit goes into shutdown mode when an undervoltage fault occurs or when a logic high is applied to the shutdown pad (SHDN). During shutdown mode, the quiescent current is 0.8µA (typ).

## Control

The control pad (CTL) on the MAX1894 EV kit can be connected to one of the GPIO lines of a µC to turn off all the protection MOSFETs simultaneously.

## Discharge Current Protection

When the discharge current exceeds 7.25A (IOD\_TH = VOD\_TH/R2) for more than 3ms, all protection MOSFETs are turned off, disconnecting the battery pack from the current path.

## Charge-Current Protection

When the charge current exceeds 5A (IOC\_TH = VOC\_TH/R2) for more than 3ms, the trickle-charge MOSFET P1 and the overcharge MOSFET P3 are turned off, disconnecting the battery pack from the current path.

## Pack-Short Current Protection

When the discharge current exceeds a second higher current limit,  20A  (IPS\_TH = VPS\_TH/R2) for more than 450µs, all protection MOSFETs are turned off, disconnecting the battery pack from the current path.

## Jumper Selection

## VDD Enable

Jumper JU4 enables the VDD power supply by connecting the input of the MAX1615 to B4\_P. Install a shunt on JU4 to enable VDD. Remove the shunt from JU4 to disable VDD. See Table 4 for shunt positions.

## VDD Selection

Jumper JU1 selects the output voltage of VDD. To set VDD to +5V, install a shunt across pins 1 and 2 of JU1. To set VDD to +3.3V, install a shunt across pins 2 and 3 of JU1. See Table 1 for shunt positions.

## MAX1894 EV Kit Shutdown

Jumper JU2 selects the shutdown mode. To shut down the part, install a shunt across pins 1 and 2 of JU2. To enable the part, install a shunt across pins 2 and 3 of JU2. The shutdown mode can also be driven by an external µC connected to the SHDN pad. To use an external µC for the shutdown mode, remove the shunt from JU2 and connect the output of the µC to the SHDN pad. See Table 2 for shunt positions.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1894/MAX1924 Evaluation Kit

## Table 1. JU1 Jumper Selection

| JUMPER   | SHUNT POSITION   | VDD OUTPUT VOLTAGE (V)   |
|----------|------------------|--------------------------|
| JU1      | 1-2*             | VDD = +5                 |
| JU1      | 2-3*             | VDD = +3.3               |

Table 2. JU2 Jumper Selection

| JUMPER   | SHUNT POSITION   | EV KIT FUNCTION                                    |
|----------|------------------|----------------------------------------------------|
| JU2      | 1-2              | Shutdown mode enabled                              |
| JU2      | 2-3              | Shutdown mode disabled                             |
| JU2      | None             | Shutdown mode controlled by an external controller |

## Table 3. JU3 Jumper Selection

| JUMPER   | SHUNT POSITION   | EV KIT FUNCTION                                   |
|----------|------------------|---------------------------------------------------|
| JU3      | 1-2              | Control mode enabled (FETs OFF)                   |
| JU3      | 2-3              | Control mode disabled                             |
| JU3      | None             | Control mode controlled by an external controller |

## Control

Jumper JU3 selects the logic state of the control pin of the MAX1894. To force a logic high on the control pin, install  a  shunt  across pins 1 and 2 of JU3. To force a logic low on the control pin, install a shunt across pins 2 and 3 of JU3. The control mode can also be driven by an external µC. Remove the shunt from jumper JU3 and connect the output of the µC to the CTL pad. See Table 3 for shunt positions.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Jumper JU5 selects between the 3-cell and the 4-cell battery pack applications for the MAX1894 EV kit. The MAX1894 EV kit is set at the factory for 4-cell applications.  For  3-cell  battery  pack  applications, install  a shunt across JU5, and replace U1 with the MAX1924V. See Table 5 for shunt positions.

## 3-Cell/4-Cell Selection

## Table 4. JU4 Jumper Selection

| JUMPER   | SHUNT POSITION   | VDD FUNCTION     |
|----------|------------------|------------------|
| JU4      | Installed        | MAX1615 enabled  |
| JU4      | None             | MAX1615 disabled |

## Table 5. JU5 Jumper Selection

| JUMPER   | SHUNT POSITION   | EV KIT FUNCTION   |
|----------|------------------|-------------------|
| JU5      | Installed        | 3 series cells    |
| JU5      | None             | 4 series cells    |

<!-- image -->

## MAX1894/MAX1924 Evaluation Kit

Figure 2. MAX1894 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1894/MAX1924 Evaluation Kit

<!-- image -->

Figure 3. MAX1894 EV Kit Component Placement GuideComponent Side

Figure 4. MAX1894 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 5. MAX1894 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->