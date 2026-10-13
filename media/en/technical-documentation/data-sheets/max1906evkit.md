<!-- lastmod 2022-08-04 -->
## General Description

The MAX1906 evaluation kit (EV kit) is a complete, fully assembled and tested circuit board that is used to evaluate the MAX1906 lithium-ion (Li+) battery-pack protector.  The  MAX1906 EV kit protects the battery pack by blowing an on-board fuse when any individual cell in the battery pack exceeds the overvoltage protection threshold. The MAX1906 EV kit is designed to evaluate the MAX1906X 4-cell Li+ battery-pack protector. The EV kit can also be used to evaluate the MAX1906S 2cell and the MAX1906V 3-cell Li+ battery-pack protectors. See the Selector Guide to request samples of the other ICs.

Warning: The MAX1906 EV kit is designed to work with Li+ batteries under potentially dangerous conditions. Exercise extreme caution when performing overcharge tests on live Li+ cells. Users who power up this EV kit or power the sources connected to it must be careful to follow  safety  procedures appropriate to working with Li+ batteries.

Under severe fault or failure conditions, this EV kit may dissipate large amounts of power, which could result in the mechanical ejection of a component or of component debris at high velocity. Operate this kit with care to avoid possible personal injury.

| DESIGNATION        |   QTY | DESCRIPTION                                                                                |
|--------------------|-------|--------------------------------------------------------------------------------------------|
| C1-C4              |     4 | 0.1µF ±10%, 16V ceramic capacitors (0603) Taiyo Yuden EMK107BJ104KA or TDK C1608X7R1E104KT |
| F1                 |     1 | 5A protection fuse Sony SFD-145B                                                           |
| JU1, JU2, JU3, JU6 |     4 | 2-pin headers                                                                              |
| JU5                |     1 | 3-pin header                                                                               |
| N1                 |     1 | 30V, 5.2A N-channel FET (6-pin SuperSOT™) Fairchild FDC633N                                |

<!-- image -->

## Features

- ♦ Overvoltage Protection
- ♦ On-Board Fuse
- ♦ Test Mode for Functional Verification
- ♦ Evaluates 2-, 3-, and 4-Cell Battery Protectors
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE        |
|--------------|--------------|-------------------|
| MAX1906EVKIT | 0°C to +70°C | 16 QFN, 5mm x 5mm |

## Selector Guide

| PART         |   NO. OF CELLS / BATTERY PACK |
|--------------|-------------------------------|
| MAX1906XEGE* |                             4 |
| MAX1906VEGE  |                             3 |
| MAX1906SEGE  |                             2 |

* Installed on the EV kit.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                    |
|---------------|-------|--------------------------------|
| R1            |     1 | 10 Ω ±5% resistor (0603)       |
| R2, R3, R4    |     3 | 1k Ω ±5% resistors (0603)      |
| R5            |     1 | 560 Ω ±5% resistor (2512)      |
| R6            |     1 | 100k Ω ±5% resistor (0603)     |
| R7            |     0 | Not installed, resistor (2512) |
| U1            |     1 | MAX1906XEGE, 16-pin QFN        |
| None          |     4 | Shunts (JU1, JU2, JU3, JU5)    |
| None          |     1 | MAX1906 PC board               |
| None          |     1 | MAX1906 data sheet             |
| None          |     1 | MAX1906EVKIT data sheet        |

## Component Suppliers

| SUPPLIER    | PHONE          | FAX                  | WEBSITE                |
|-------------|----------------|----------------------|------------------------|
| Fairchild   | 888-522-5372   | Local representative | www.fairchildsemi.com  |
| Sony        | 81-3-3279-0448 | 81-3-5255-8448       | www.sccj.co.jp/html_e/ |
| Taiyo Yuden | 800-348-2496   | 847-925-0899         | www.t-yuden.com        |
| TDK         | 847-803-6100   | 847-390-4405         | www.component.tdk.com  |

Note: Please indicate that you are using the MAX1906 when contacting the manufacturers.

SuperSOT is a trademark of Fairchild Semiconductor.

## MAXIM

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

## MAX1906 Evaluation Kit

## Quick Start

The MAX1906 EV kit is a fully assembled and tested surface-mount board. Follow the steps below to verify board operation. Do not turn on the battery charger until indicated:

- 1) Verify that shunts are not installed on jumpers JU1, JU2, and JU3 (fuse protection is disabled).
- 2) Verify  that  shunts  are  installed  on  jumper  JU6  and across pins 1 and 2 of jumper JU5.
- 3) Connect the positive terminals of three voltmeters to the OUT, DRV, and DISCON pads. Connect the negative terminal of the voltmeters to the PACK- pad.
- 4) Connect the positive terminal of a 3.3V source to the VI/O pad. Connect the negative terminal of the source to the PACK- pad.
- 5) Measure the voltage across the 4-cell battery pack.
- 6) Connect the 4-cell (series connected) Li+ battery pack across BN and BATT4+. Observe the correct Li+ battery-pack polarity.
- a) Connect the negative terminal of the first cell to BN.
- b) Connect the positive terminal of the first cell to BATT1+.
- c) Connect the positive terminal of the second cell to BATT2+.
- d) Connect the positive terminal of the third cell to BATT3+.
- e) Connect the positive terminal of the fourth cell to BATT4+.

For test purposes, the Li+ cells can be replaced by four floating power supplies

- 7) Verify  that  the  voltage  across  OUT  and  PACK- is approximately the voltage measured in step 5.
- 8) Disable the battery charger.
- 9) Connect the positive terminal of the battery charger to PACK+. Connect the negative terminal of the battery charger to PACK-.
- 10) Enable the battery charger.
- 11) Force overcharge conditions and observe that OUT is pulled low and DRV is driven to approximately 5V.

Note: In  this  configuration,  fuse  protection  is  disabled and the EV kit does not provide overvoltage protection. The current that would destroy the fuse in an overcharge condition is limited and sunk through resistor R5. Charging must be manually monitored. Enable fuse protection (one time) by removing the shunt across JU6 and installing it on JU3.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Detailed Description

The MAX1906 EV kit is a complete, fully assembled and tested circuit board that is used to evaluate the MAX1906X Li+ battery-pack protector. The MAX1906X is designed to protect an Li+ battery pack, where 4 cells are connected in series. The EV kit protects against potentially hazardous conditions by disconnecting the battery pack from the battery charger. This is accomplished by blowing the protection fuse in the circuit when any individual cell in the pack exceeds the overvoltage protection threshold.

## Inputs

The MAX1906 EV kit does not require an external power source for the EV kit to function. The EV kit uses the battery pack as the power source. Connect the Li+ battery pack across BATT4+ and BN pads and the battery charger across PACK+ and PACK- pads.

The battery-pack terminals and all intermediate cell connection points must be connected to their corresponding input pads on the EV kit:

- 1) Connect the negative terminal of the first cell to BN.
- 2) Connect the positive terminal of the first cell to BATT1+.
- 3) Connect the positive terminal of the second cell to BATT2+.
- 4) Connect the positive terminal of the third cell to BATT3+.
- 5) Connect the positive terminal of the fourth cell to BATT4+.

## One-Time Fuse

The MAX1906 EV kit disconnects the battery charger from the battery pack by blowing fuse F1 with high current when overcharging is detected. The fuse can only be used once and must be replaced if it is opened by overcharge detection. However, for repeated EV kit evaluation, the fuse can be bypassed by configuring JU3 and JU6 to redirect the high current through power resistor  R5.  Remove the shunt across JU3 and install the shunt across JU6 to avoid destroying the fuse. R5 limits the maximum current drawn in a fault condition to 31mA. Monitor all charging conditions of the battery pack when JU3 is open (fuse is disabled).

<!-- image -->

## Table 1. JU5 Settings

| SHUNT POSITION   | EV KIT FUNCTION                |
|------------------|--------------------------------|
| 1 and 2          | Current sink through OUT pin   |
| 2 and 3          | Current sink through MOSFET N1 |

## Current Sink

The MAX1906 EV kit sinks current during overcharge detection to blow the fuse. The EV kit sinks current in one of two ways: internally through the OUT pin, or externally through MOSFET N1 driven by the DRV pin. JU5 must be configured to choose the path for the current. See Table 1 for JU5 configuration.

Note: During battery-overcharge detection, DRV is always driven high to drive the external MOSFET N1.

## Test Mode

The MAX1906 IC includes a special test mode that allows the chip to be tested in a fully assembled battery pack. Refer to the Test Mode section in the MAX1906 data sheet for test-mode setup instructions. Use the TEST pad to set the EV kit in test mode.

<!-- image -->

## MAX1906 Evaluation Kit

## Output Signals

The MAX1906 EV kit drives outputs OUT, DRV, and DISCON high or low to warn the user if fault conditions are detected. Refer to the MAX1906 data sheet for the state of these outputs under different conditions.

## Evaluating MAX1906V/S

The MAX1906 EV kit is designed to evaluate the MAX1906X Li+ battery-pack protector. The EV kit can also be used to evaluate the MAX1906S 2-cell and the MAX1906V 3-cell Li+ battery-pack protectors. Order samples of these battery protectors and replace the MAX1906X (U1) on the board with the desired part. To evaluate other parts, configure JU1 and JU2 to account for the reduced number of cells in the Li+ battery pack. See Table 3 for JU1 and JU2 configurations.

## Table 2. JU1 and JU2

| PART ON     | NO. OF CELLS /   | SHUNT POSITION   | SHUNT POSITION   |
|-------------|------------------|------------------|------------------|
| EV KIT      | BATTERY PACK     | JU1              | JU2              |
| MAX1906XEGE | 4                | None             | None             |
| MAX1906VEGE | 3                | Installed        | None             |
| MAX1906SEGE | 2                | Installed        | Installed        |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1906 Evaluation Kit

Figure 1. MAX1906 EV Kit Schematic

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 2. MAX1906 EV Kit Component Placement GuideComponent Side

<!-- image -->

## MAX1906 Evaluation Kit

Figure 3. MAX1906 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4. MAX1906 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600  \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

5