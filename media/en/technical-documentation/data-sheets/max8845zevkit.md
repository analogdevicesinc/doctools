<!-- lastmod 2022-08-03 -->
<!-- image -->

## MAX8845Z Evaluation Kit

## General Description

The MAX8845Z evaluation kit (EV kit) is a fully assembled and tested PCB for evaluating the MAX8845Z/ MAX8845Y 28V linear Li+ battery chargers.

The MAX8845Z EV kit features an overvoltage-protected LDO output (SAFEOUT) for low-voltage-rated USB or  charger inputs in the system, and a battery pack detection circuit (DETBAT) that disables the IC when the battery pack is absent. The IC disables charging if the input sources exceed 7.5V to protect against unqualified or faulty AC adapters. The MAX8845Z EV kit also features an adjustable fast-charge current set by an external resistor (R1) and an adjustable top-off current threshold set by an external resistor (R2).

Other features include an active-low control input ( EN ) and an active-low input power source detection output ( POK ).  The IC also contains a booting assistant circuit that  distinguishes input sources and battery connection, and provides an output signal (MAX8845Z = ABO, MAX8845Y = ABO ) for system booting.

To  evaluate  the  MAX8845Y  version,  order  the MAX8845YETC+ along with the MAX8845ZEVKIT+ and see the Evaluating the MAX8845Y section.

| DESIGNATION   |   QTY | DESCRIPTION                                                                                     |
|---------------|-------|-------------------------------------------------------------------------------------------------|
| C1            |     1 | 1µF ±10%, 35V X5R ceramic capacitor (0603) Taiyo Yuden GMK107BJ105KA                            |
| C2            |     1 | 2.2µF ±10%, 10V X5R ceramic capacitor (0603) Taiyo Yuden LMK107BJ225KA Murata GRM188R61A225KE34 |
| C3            |     1 | 0.1µF ±10%, 16V X7R ceramic capacitor (0402) TDK C1005X7R1C683K                                 |

Features

- ♦ CCCV, Thermally Regulated Linear Single-Cell Li+ Battery Charger
- ♦ No External MOSFET, Reverse-Blocking Diode, or Current-Sense Resistor
- ♦ Programmable Fast-Charge Currents (1ARMS max)
- ♦ Programmable Top-Off Current Threshold
- ♦ Input Overvoltage-Protected 4.7V Output (SAFEOUT) from DC
- ♦ Proprietary Die Temperature Regulation Control (+115°C)
- ♦ 4.25V to 28V Input-Voltage Range with Input Overvoltage Protection Above +7.5V
- ♦ Low-Dropout Voltage (300mV at 500mA)
- ♦ Input Power-Source Detection Output ( POK ), Charge Status Output ( CHG ), and Charge-Enable Input ( EN )
- ♦ Output for Autobooting (MAX8845Z = ABO, MAX8845Y = ABO )
- ♦ Lead(Pb)-Free and RoHS Compliant

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX8845ZEVKIT+ | EV Kit |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                         |
|---------------|-------|---------------------------------------------------------------------|
| C4            |     1 | 1µF ±10%, 10V X5R ceramic capacitor (0402) Murata GRM155R61A105K    |
| C5            |     0 | Not installed, capacitor                                            |
| D1, D2        |     2 | Red LEDs Panasonic LNJ208R8ARA                                      |
| JU1-JU4       |     4 | 2-pin headers, 0.1in center Sullins PEC36SAAN Digi-Key S1012E-36-ND |
| R1            |     1 | 2.80k Ω ±1% resistor (0402)                                         |

## MAX8845Z Evaluation Kit

## Component List (continued)

*EP = Exposed pad.

| DESIGNATION   |   QTY | DESCRIPTION                               |
|---------------|-------|-------------------------------------------|
| R2            |     1 | 1.74k Ω ±1% resistor (0402)               |
| R3, R4        |     2 | 200 Ω ±5% resistors (0402)                |
| R5            |     1 | 4.7k Ω ±5% resistor (0402)                |
| R6, R7        |     0 | Not installed, resistors-PCB short (0402) |
| R8            |     1 | 200k Ω ±5% resistor (0402)                |

| DESIGNATION   |   QTY | DESCRIPTION                                                                         |
|---------------|-------|-------------------------------------------------------------------------------------|
| U1            |     1 | 28V linear Li+ battery charger (12 Thin QFN-EP*) Maxim MAX8845ZETC+ (Top Mark: ABL) |
| -             |     1 | PCB: MAX8845Z Evaluation Kit+                                                       |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Digi-Key Corp.                         | 800-344-4539 | www.digikey.com             |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| Panasonic Corp.                        | 800-344-2112 | www.panasonic.com           |
| Sullins Electronics Corp.              | 760-744-0125 | www.sullinselectronics.com  |
| Taiyo Yuden                            | 800-348-2496 | www.t-yuden.com             |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |

Note: Indicate that you are using the MAX8845Z when contacting these component suppliers.

## Quick Start

## Recommended Equipment

- 4V to 28V adjustable power supply (PS1) capable of 1A
- One 5V power supply (PS2) capable of 100mA
- Three digital multimeters (DMM1, DMM2, DMM3)
- One 10A ammeter
- One single-cell lithium-ion (Li+) battery (not fully charged)

## Procedure

The MAX8845Z EV kit is a fully assembled and tested surface-mount board. Follow the steps below and Figure 1 to set up and verify the MAX8845Z and board operation:

- 1) Preset the power supply (PS1) to 5V. Turn off the power supply. Do not turn on the power supply until all connections are completed.
- 2) Preset the power supply (PS2) to 5V. Turn off the power supply. Do not turn on the power supply until all connections are completed.
- 3) Verify that a shunt is installed on JU1 ( EN ) to set the EV kit in disable mode.
- 4) Verify that a shunt is installed on JU2 (DETBAT).
- 5) Verify  that  JU3  and  JU4  are  open  and  shunts  are not installed.
- 6) Connect the positive lead of the power supply (PS1) to the EV kit pad labeled IN. Connect the negative lead of the power supply to the EV kit pad labeled GND.
- 7) Connect the positive lead of the power supply (PS2) to the EV kit pad labeled VI/O. Connect the negative lead of the power supply to the EV kit pad labeled GND.
- 8) Observe correct Li+ cell polarity. Connect the single-cell Li+ battery and 10A ammeter, as shown in Figure 1. The positive lead of the ammeter must connect to BATT+ and the negative lead to the positive terminal of the Li+ battery.
- 9) Connect a digital multimeter (DMM1) across the Li+ battery.  Connect the positive lead of DMM1 to the positive terminal of the Li+ battery. Connect the negative lead of DMM1 to the negative terminal of the Li+ battery and note the battery voltage. If VBATT &lt; 2.5V, the charger starts in precharge mode. If VBATT ≥ 2.5V, the charger starts up in fastcharge mode.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX8845Z Evaluation Kit

- 10) Connect a digital multimeter (DMM2) from ABO (MAX8845Z only) to GND.

## Detailed Description of Hardware

- 11) Connect a digital multimeter (DMM3) from SAFEOUT to GND.
- 12) Turn on PS1 and then turn on PS2.
- 13) Remove the shunt on JU1 to set the EV kit in enable mode.
- 14) Verify that D2 is emitting light, indicating that POK is low and input power is valid.
- 15) Verify  that  the  voltage  read  by  DMM3 is  approximately 4.7V.
- 16) If the charger is in fast-charge mode, verify that the ammeter reads approximately 500mA. If the charger  is  in  precharge  mode,  verify  that  the  ammeter reads approximately 50mA.
- 17) Verify that D1 is emitting light, indicating that CHG is low and the battery charger is on.

Note: If  the  battery  is  fully  charged,  D1 will not emit light.

- 18) Verify  that  the  voltage  read  by  DMM2 is  approximately the same voltage read by DMM1.
- 19) When the battery is fully charged, DMM1 reads 4.2V.
- 20) Remove the shunt on JU2 and verify that D1 and D2 are not emitting light.
- 21) Install a shunt on JU2.
- 22) Turn off the input power supply (PS1).
- 23) Verify  that  D2  is  not  emitting  light  and  the  voltage read by DMM2 is 0V.
- 24) Install a shunt on JU4.
- 25) Verify  that  the  voltage  read  at  DMM2  is  approximately the same voltage read by DMM1.
- 26) Turn on PS1 and increase to 8V.
- 27) Verify that D1 and D2 are not emitting light and the voltage read by DMM3 is 0V.

When evaluation of the MAX8845Z EV kit is completed, use the following steps to power down the EV kit:

- 1) Install a shunt on JU1.
- 2) Turn off both power supplies.
- 3) Remove the battery.
- 4) Disconnect all test leads from the EV kit.

<!-- image -->

The MAX8845Z/MAX8845Y chargers use voltage, current,  and  thermal-control  loops  to  charge  a  single  Li+ cell and protect the battery. When a Li+ battery with a cell  voltage  below 2.5V is inserted, the MAX8845Z/ MAX8845Y chargers enter a prequalification stage where it precharges that cell with 10% of the user-programmed fast-charge current. The CHG indicator is driven low to indicate entry into the prequalification state. When the battery voltage exceeds 2.5V, the IC softstarts as it enters the fast-charge stage. The fastcharge current level is programmed through a resistor from SETI to GND. As the battery voltage approaches 4.2V, the battery current is reduced. If the battery current drops to less than the top-off current threshold set by RMIN, the IC enters top-off mode and the CHG indicator goes high impedance, signaling that the battery is fully charged.

## Overvoltage-Protected Output (SAFEOUT)

SAFEOUT is a linear regulator that provides an output voltage of 4.7V and can be used to supply low-voltagerated charging systems. The SAFEOUT linear regulator turns on when VIN ≥ 4.25V regardless of EN and is disabled when VIN is greater than the overvoltage threshold (7.5V typ).

Battery Pack Detection Input (DETBAT) DETBAT is a battery pack ID resistor detector that enables the battery charger if pulled low through a resistor that is &lt; 51k Ω .  By  installing a header on JU2, DETBAT is pulled to ground through R5 (4.7k Ω ).  If DETBAT is left unconnected, or the pulldown resistor is  51k Ω or  greater,  the  battery  charger  is  disabled.  If DETBAT is not used, connect DETBAT to GND for normal operation.

## POK Output

The open-drain POK output asserts low when 2.35V ≤ VIN ≤ 7V, (VIN -  VBATT) ≥ 40mV (typ VIN rising), and DETBET is pulled low through a resistor that is &lt; 51k Ω . POK is  high  impedance during shutdown. When interfacing with a microprocessor logic input, a pullup resistor to the microprocessor's I/O voltage may be required.

## Autobooting Assistant

The MAX8845Z/MAX8845Y contain an autobooting assistant circuit that generates an enable signal for system booting (MAX8845Z = ABO, MAX8845Y = ABO ). For the MAX8845Z, the booting assistant functions as an internal OR gate (refer to the MAX8845Z/MAX8845Y IC data sheet). The first input is dependent on the input supply voltage VIN and DETBAT, while the second input

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8845Z Evaluation Kit

Figure 1. Test Procedure Setup for MAX8845Z EV Kit

<!-- image -->

## Table 1. Jumper Settings (JU1-JU4)

| JUMPER   | DEFAULT SETTINGS   | FUNCTION                                                                                                                                                                                                                                                                         |
|----------|--------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| JU1      | Installed          | JU1 connects EN (active-low enable input) to VI/O (system supply). Install a shunt on JU1 to disable the IC. EN has an internal pulldown resistor to GND. Remove the shunt from JU1 to enable the IC.                                                                            |
| JU2      | Installed          | JU2 connects DETBAT (battery pack ID resistor detection input) to GND through R5. Install a shunt on JU2 to simulate battery present. Remove the shunt on JU2 to simulate battery absent.                                                                                        |
| JU3      | Not installed      | Remove the shunt on JU3 to evaluate the MAX8845Z with an active-high autobooting logic output (ABO). Install a shunt on JU3 to connect ABO to the VI/O supply through R8 in order to achieve a logic-high output on the drain of the internal open-drain MOSFET (MAX8845Y only). |
| JU4      | Not installed      | JU4 connects ABI (autobooting input) to VI/O (system supply). Install a shunt on JU4 to connect ABI to VI/O. Remove the shunt on JU4 to leave ABI unconnected and when ABI is driven by an external source.                                                                      |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX8845Z Evaluation Kit

is an external signal applied to ABI. The first input ( POK ) is  driven  high  once DETBAT is pulled low through a resistor &lt; 51k Ω ,  2.35V ≤ VIN ≤ 7V, and (VIN - VBATT) ≥ 40mV (typ VIN rising).

ampere of charging current. The output voltage at SETI is proportional to the charging current:

The second input signal (ABI) is driven by an external source (see Table 2). ABI enables an autoboot signal when a battery is connected at BATT and is independent of POK . If POK is pulled low, the booting assistant always drives ABO high (MAX8845Z), regardless of ABI. ABI is pulled to GND through an internal 200k Ω resistor. If  ABI is supplied from an outside exposed pin, an RC filter  (R1/C3 in Figure 2) is required for ESD protection and noise filtering. If ABI is supplied by a system's internal GPIO, or logic, the RC filter is not required.

For the MAX8845Y, the output ABO is only dependent on the state of ABI (Table 2).

## Charger Enable Input

The MAX8845Z EV kit contains an active-low logic input ( EN )  used  to  enable  the  IC.  Drive EN low,  leave  JU1 unconnected, or connect EN to  GND to enable the charge-control circuitry. Drive EN high to disable the charge-control circuitry. EN has an internal 200k Ω pulldown resistor.

## Fast-Charge Current Setting

The maximum charging current is programmed by an external resistor connected from SETI to GND (R1 in Figure 2). Use the following equation to determine the fast-charge current (IFAST\_CHARGE):

<!-- formula-not-decoded -->

where IFAST\_CHARGE is in amperes and RSETI is in ohms. RSETI must always be 1.40k Ω or  higher  due  to the continuous charging current limit of 1A. The voltage at SETI can be used to monitor the fast-charge current level.  The output current from SETI is 1016µA per

Table 2. Autobooting Output States

| ABI   | BATT        | POK            | CHARGER STATE       | ABO (MAX8845Z)   | ABO (MAX8845Y)   |
|-------|-------------|----------------|---------------------|------------------|------------------|
| Low   | Present     | High impedance | Shutdown            | Low              | High impedance   |
| High  | Present     | High impedance | Shutdown            | High             | Low              |
| Low   | Not present | Low            | Fast charge/top off | High             | High impedance   |
| Low   | Present     | Low            | Fast charge/top off | High             | High impedance   |
| High  | Present     | Low            | Fast charge/top off | High             | Low              |

Note: Present indicates that VBATT ≥ 2V and not present indicates that battery is not connected.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- formula-not-decoded -->

The voltage at SETI is nominally 1.4V at the selected fast-charge current, and falls with charging current as the cell becomes fully charged or as the thermalregulation circuitry activates.

## Top-Off Current Threshold Setting

The top-off current threshold is programmed by an external resistor connected from MIN to GND (R2 in Figure 2). Use the following equation to determine the top-off current (IMIN):

<!-- formula-not-decoded -->

where IMIN is in amperes and RMIN is in ohms.

## Thermal Regulation

The thermal-regulation loop limits the MAX8845Z/ MAX8845Y die temperature to +115°C by reducing the charge current, as necessary. This feature not only protects the IC from overheating, but also allows a higher charge current without risking damage to the IC.

## Evaluating the MAX8845Y

To  evaluate  the  MAX8845Y  version,  order  the MAX8845YETC+ along with the MAX8845ZEVKIT+. Remove U1 and replace with the MAX8845YETC+ (Top Mark: ABM) and install a shunt on JU3. The MAX8845Y features an active-low autobooting logic output ( ABO ) and requires an external power supply (VI/O on the MAX8845Z EV kit) to achieve logic-high.

To evaluate the MAX8845Y and board operation, see Figures 1 and 3 and follow the procedure on the next page. The MAX8845Y procedure is similar to the MAX8845Z procedure with a few minor differences.

## MAX8845Z Evaluation Kit

## MAX8845Y Procedure

Follow the steps below and Figure 1 to set up and verify the MAX8845Y and board operation:

- 1) Preset the power supply (PS1) to 5V. Turn off the power supply. Do not turn on the power supply until all connections are completed.
- 2) Preset the power supply (PS2) to 5V. Turn off the power supply. Do not turn on the power supply until all connections are completed.
- 3) Verify that a shunt is installed on JU1 ( EN ) to set the EV kit in disable mode.
- 4) Verify that a shunt is installed on JU2 (DETBAT).
- 5) Verify that a shunt is installed on JU3. Verify that a shunt is installed on JU4.
- 6) Connect the positive lead of the power supply (PS1) to the EV kit pad labeled IN. Connect the negative lead of the power supply to the EV kit pad labeled GND.
- 7) Connect the positive lead of the power supply (PS2) to the EV kit pad labeled VI/O. Connect the negative lead of the power supply to the EV kit pad labeled GND.
- 8) Observe correct Li+ cell polarity. Connect a singlecell  Li+  battery  and  10A ammeter, as shown in Figure 1. The positive lead of the ammeter must connect to BATT+ and the negative lead to the positive terminal of the Li+ battery.
- 9) Connect a digital multimeter (DMM1) across the Li+ battery.  Connect the positive lead of DMM1 to the positive lead of the Li+ battery. Connect the negative  lead  of  DMM1 to the negative terminal of the Li+ battery and note the battery voltage. If VBATT &lt; 2.5V, the charger starts in precharge mode. If VBATT ≥ 2.5V the charger starts up in fast-charge mode.
- 10) Connect a digital multimeter (DMM2) from ABO to GND.
- 11) Connect a digital multimeter (DMM3) from SAFEOUT to GND.
- 12) Turn on PS1 and then turn on PS2.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- 13) Remove the shunt on JU1 to set the EV kit in enable mode.
- 14) Verify that D2 is on indicating POK is low and input power is valid.
- 15) Verify  that  the  voltage  read  by  DMM3 is  approximately 4.7V.
- 16) If the charger is in fast-charge mode, verify that the ammeter reads approximately 500mA. If the charger  is  in  precharge  mode,  verify  that  the  ammeter reads approximately 50mA.
- 17) Verify that D1 is on indicating that CHG is low and the battery charger is on.

Note: If the battery is fully charged, D1 will not turn on.

- 18) Verify that the voltage read by DMM2 is 0V.
- 19) When the battery is fully charged, DMM1 reads 4.2V.
- 20) Remove the shunt on JU2 and verify that D1 and D2 are not emitting light.
- 21) Install a shunt on JU2.
- 22) Turn off the input power supply (PS1).
- 23) Verify that D2 is not emitting light and that the voltage read by DMM2 is approximately 5V.
- 24) Remove the shunt on JU4.
- 25) Verify  that  the  voltage  read  by  DMM2 is  approximately 5V.
- 26) Turn on PS1 and increase to 8V.
- 27) Verify that D1 and D2 are not emitting light and that the voltage read by DMM3 is 0V.

When evaluation of the MAX8845Y is completed, use the following steps to power down the EV kit:

- 1) Ensure a shunt on JU1.
- 2) Turn off both power supplies.
- 3) Remove the battery.
- 4) Disconnect all test leads from the EV kit.

<!-- image -->

## MAX8845Z Evaluation Kit

<!-- image -->

Figure 2. MAX8845Z EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8845Z Evaluation Kit

Figure 3. MAX8845Y EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8845Z Evaluation Kit

Figure 4. MAX8845Z EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8845Z Evaluation Kit

Figure 5. MAX8845Z EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX8845Z Evaluation Kit

Figure 6. MAX8845Z EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.