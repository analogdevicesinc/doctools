<!-- lastmod 2022-08-03 -->
<!-- image -->

## MAX8844Z Evaluation Kit

## General Description

The MAX8844Z evaluation kit (EV kit) is a fully assembled and  tested  PCB  for  evaluating  the  MAX8844Z/ MAX8844Y 28V linear Li+ battery chargers. The MAX8844Z EV kit operates from two power sources (USB or IN) and automatically selects between the two. The IC disables charging if the input sources exceed 7.5V to protect against unqualified or faulty AC adapters.

The MAX8844Z EV kit features two input overvoltageprotected LDO outputs (SAFEOUT, SAFEUSB) for lowvoltage-rated USB or charger inputs in the system, and a battery pack detection circuit (DETBAT) that disables the IC when the battery pack is absent. The MAX8844Z EV kit also features an adjustable fast-charge current set by an external resistor (R1) and an adjustable topoff current threshold set by an external resistor (R2).

Other features include an active-low control input ( EN ) and an active-low input power source detection output ( POK ).  The IC also contains a booting assistant circuit that  distinguishes input sources and battery connection, and provides an output signal (MAX8844Z = ABO, MAX8844Y = ABO ) for system booting.

To evaluate the MAX8844Y version, sample the MAX8844YETD+ along with the MAX8844ZEVKIT+ and see the Evaluating the MAX8844Y section.

| DESIGNATION   |   QTY | DESCRIPTION                                                                                     |
|---------------|-------|-------------------------------------------------------------------------------------------------|
| C1, C6        |     2 | 1µF ±10%, 35V X5R ceramic capacitors (0603) Taiyo Yuden GMK107BJ105KA                           |
| C2            |     1 | 2.2µF ±10%, 10V X5R ceramic capacitor (0603) Taiyo Yuden LMK107BJ225KA Murata GRM188R61A225KE34 |
| C3            |     1 | 0.1µF ±10%, 16V X7R ceramic capacitor (0402) TDK C1005X7R1C683K                                 |

Features

- ♦ CCCV, Thermally Regulated Linear Single-Cell Li+ Battery Charger
- ♦ No External MOSFET, Reverse-Blocking Diode, or Current-Sense Resistor
- ♦ Programmable Fast-Charge Currents (1ARMS max)
- ♦ Programmable Top-Off Current Threshold ( m in)
- ♦ Input Overvoltage Protected 4.7V Output (SAFEOUT) from DC
- ♦ Input Overvoltage-Protected 4.7V Output (SAFEUSB) from USB
- ♦ Proprietary Die Temperature Regulation Control (+115°C)
- ♦ 4.25V to 28V Input-Voltage Range with Input Overvoltage Protection Above +7.5V
- ♦ Low-Dropout Voltage (300mV at 500mA)
- ♦ Input Power-Source Detection Output ( POK ), Charge Status Output ( CHG ), and Charge-Enable Input ( EN )
- ♦ Output for Autobooting (MAX8844Z = ABO, MAX8844Y = ABO )
- ♦ Lead(Pb)-Free and RoHS Compliant

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX8844ZEVKIT+ | EV Kit |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                         |
|---------------|-------|---------------------------------------------------------------------|
| C4, C7        |     2 | 1µF ±10%, 10V X5R ceramic capacitors (0402) Murata GRM155R61A105K   |
| C5            |     0 | Not installed, capacitor                                            |
| D1, D2        |     2 | Red LEDs Panasonic LNJ208R8ARA                                      |
| JU1-JU4       |     4 | 2-pin headers, 0.1in center Sullins PEC36SAAN Digi-Key S1012E-36-ND |
| R1            |     1 | 2.8k ±1% resistor (0402), lead free                                 |

## MAX8844Z Evaluation Kit

## Component List (continued)

*EP = Exposed pad.

| DESIGNATION   |   QTY | DESCRIPTION                               |
|---------------|-------|-------------------------------------------|
| R2            |     1 | 1.74k ±1% resistor (0402), lead free      |
| R3, R4        |     2 | 200 ±5% resistors (0402), lead free       |
| R5            |     1 | 4.7k ±5% resistor (0402), lead free       |
| R6, R7        |     0 | Not installed, resistors-PCB short (0402) |

| DESIGNATION   |   QTY | DESCRIPTION                                                                     |
|---------------|-------|---------------------------------------------------------------------------------|
| R8            |     1 | 200k ±5% resistor (0402), lead free                                             |
| U1            |     1 | 28V linear Li+ battery charger (14 TDFN-EP*) Maxim MAX8844ZETD+ (Top Mark: AEK) |
| -             |     1 | PCB: MAX8844Z Evaluation Kit+                                                   |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Digi-Key Corp.                         | 800-344-4539 | www.digikey.com             |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| Panasonic Corp.                        | 800-344-2112 | www.panasonic.com           |
| Sullins Electronics Corp.              | 760-744-0125 | www.sullinselectronics.com  |
| Taiyo Yuden                            | 800-348-2496 | www.t-yuden.com             |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |

Note: Indicate that you are using the MAX8844Z when contacting these component suppliers.

## Quick Start

## Recommended Equipment

- Two 4V to 28V adjustable power supplies (PS1, PS2) capable of 1A each
- One 5V power supply (PS3) capable of 100mA
- Four digital multimeters (DMM1-DMM4)
- One 10A ammeter
- One single-cell lithium-ion (Li+) battery (not fully charged)

## Procedure

The MAX8844Z EV kit is a fully assembled and tested surface-mount board. Follow the steps below and Figure 1 to set up and verify the MAX8844Z and board operation. Caution: Do not turn on the power supplies until all connections are completed.

- 1) Preset the power supply (PS1) to 5V. Turn off the power supply. Do not turn on the power supply until all connections are completed.
- 2) Preset the power supply (PS2) to 5V. Turn off the power supply. Do not turn on the power supply until all connections are completed.
- 3) Preset the power supply (PS3) to 5V. Turn off the power supply. Do not turn on the power supply until all connections are completed.
- 4) Verify that a shunt is installed on JU1 ( EN ) to set the EV kit in disable mode.
- 5) Verify that a shunt is installed on JU2 (DETBAT).
- 6) Verify  that  JU3  and  JU4  are  open  and  shunts  are not installed.
- 7) Connect the positive lead of the power supply (PS1) to the EV kit pad labeled IN. Connect the negative lead of the power supply to the EV kit pad labeled GND.
- 8) Connect the positive lead of the power supply (PS2) to  the  EV  kit  pad  labeled  USB.  Connect the negative  lead  of  the  power  supply to the EV kit pad labeled GND.
- 9) Connect the positive lead of the power supply (PS3) to the EV kit pad labeled VI/O. Connect the negative lead of the power supply to the EV kit pad labeled GND.
- 10) Observe correct Li+ cell polarity. Connect the single-cell Li+ battery and 10A ammeter, as shown in Figure 1. The positive lead of the ammeter must

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX8844Z Evaluation Kit

- connect to BATT+ and the negative lead to the positive terminal of the Li+ battery.
- 11) Connect a digital multimeter (DMM1) across the Li+ battery.  Connect the positive terminal of DMM1 to the positive terminal of the Li+ battery. Connect the negative terminal of DMM1 to the negative terminal of  the  Li+  battery  and  note  the  battery  voltage.  If VBATT &lt; 2.5V, the charger starts in precharge mode. If VBATT ≥ 2.5V, the charger starts up in fastcharge mode.
- 12) Connect a digital multimeter (DMM2) from ABO (MAX8844Z only) to GND.
- 13) Connect a digital multimeter (DMM3) from SAFEOUT to GND.
- 14) Connect a digital multimeter (DMM4) from SAFEUSB to GND.
- 15) Turn on PS1 and then turn on PS3.
- 16) Remove the shunt on JU1 to set the EV kit in enable mode.
- 17) Verify that D2 is emitting light, indicating that POK is low.
- 18) Verify  that  the  voltage  read  by  DMM3 is  approximately 4.7V.
- 19) If the charger is in fast-charge mode, verify that the ammeter reads approximately 440mA. If the charger  is  in  precharge  mode,  verify  that  the  ammeter reads approximately 48mA.
- 20) Verify that D1 is emitting light, indicating that CHG is low and the battery charger is on.

Note: If  the  battery  is  fully  charged,  D1 will not emit light.

- 21) Verify  that  the  voltage  read  by  DMM2 is  approximately the same voltage read by DMM1.
- 22) When the battery is fully charged, DMM1 reads 4.2V.
- 23) Remove the shunt on JU2 and verify that D1 and D2 are not emitting light.
- 24) Install a shunt on JU2.
- 25) Turn off the input power supply (PS1).
- 26) Verify  that  D2  is  not  emitting  light  and  the  voltage read by DMM2 is 0V.
- 27) Install a shunt on JU4.
- 28) Verify  that  the  voltage  read  at  DMM2  is  approximately the same voltage read by DMM1.
- 29) Increase PS1 to 8V.
- 30) Verify that D1 and D2 are not emitting light and the voltage read by DMM3 is 0V.
- 31) Install a shunt on JU1.
- 32) Turn off PS1 and then turn on PS2.
- 33) Remove the shunt on JU1 to set the EV kit in enable mode.
- 34) Verify  that  D2  is  emitting  light,  indicating POK is low.
- 35) Verify  that  the  voltage  read  by  DMM4 is  approximately 4.7V.
- 36) If the charger is in fast-charge mode, verify that the ammeter reads approximately 380mA. If the charger  is  in  precharge  mode,  verify  that  the  ammeter reads 48mA.
- 37) Verify that D1 is emitting light, indicating that CHG is low and the battery charger is on.

<!-- image -->

Note: If the battery is fully charged, D1 will not emit light.

- 38) Increase PS2 to 8V.
- 39) Verify that D1 and D2 are not emitting light and the voltage on DMM4 is 0V.

When evaluation of the MAX8844Z EV kit is completed, use the following steps to power down the EV kit:

- 1) Install a shunt on JU1.
- 2) Turn off all power supplies.
- 3) Remove the battery.
- 4) Disconnect all test leads from the EV kit.

## Detailed Description of Hardware

The MAX8844Z/MAX8844Y chargers use voltage, current,  and  thermal-control  loops  to  charge  a  single  Li+ cell and protect the battery. When a Li+ battery with a cell  voltage  below 2.5V is inserted, the MAX8844Z/ MAX8844Y chargers enter a prequalification stage where it precharges that cell with 10% of the user-programmed fast-charge current. The CHG indicator is driven low to indicate entry into the prequalification state. When the battery voltage exceeds 2.5V, the IC softstarts as it enters the fast-charge stage. The fastcharge current level is programmed through a resistor from SETI to GND. As the battery voltage approaches 4.2V, the battery current is reduced. If the battery current drops to less than the top-off current threshold set by RMIN, the IC enters top-off mode and the CHG indicator goes high impedance, signaling that the battery is fully charged.

Overvoltage-Protected Output (SAFEOUT) SAFEOUT is a linear regulator that provides an output voltage of 4.7V and can be used to supply low-voltage-

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8844Z Evaluation Kit

Figure 1. Test Procedure Setup for MAX8844Z EV Kit

<!-- image -->

## Table 1. Jumper Settings (JU1-JU4)

| JUMPER   | DEFAULT SETTINGS   | FUNCTION                                                                                                                                                                                                                                                                    |
|----------|--------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| JU1      | Installed          | JU1 connects EN (active-low enable input) to VI/O (system supply). Install a shunt on JU1 to disable the IC. EN has an internal pulldown resistor to GND. Leave JU1 open to enable the IC.                                                                                  |
| JU2      | Installed          | JU2 connects DETBAT (battery pack ID resistor detection input) to GND through R5. Install a shunt on JU2 to simulate battery present. Leave JU2 open to simulate battery absent.                                                                                            |
| JU3      | Not installed      | Leave JU3 open when evaluating the MAX8844Z with an active-high autobooting logic output (ABO). Install a shunt on JU3 to connect ABO to the VI/O supply through R8 in order to achieve a logic-high output on the drain of the internal open-drain MOSFET (MAX8844Y only). |
| JU4      | Not installed      | JU4 connects ABI (autobooting input) to VI/O (system supply). Install a shunt on JU4 to connect ABI to VI/O. Leave JU4 open to leave ABI unconnected and when ABI is driven by an external source.                                                                          |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX8844Z Evaluation Kit

rated charging systems. The SAFEOUT linear regulator turns on when VIN ≥ 4.25V regardless of EN and is disabled when VIN is greater than the overvoltage threshold (7.5V typ).

Overvoltage Protected Output (SAFEUSB) SAFEUSB is a linear regulator that provides an output voltage of 4.7V and can be used to supply low-voltagerated USB systems. The SAFEUSB linear regulator turns on when VUSB ≥ 4.25V regardless of EN and is disabled when VUSB is greater than the overvoltage threshold (7.5V typ).

The second input signal (ABI) is driven by an external source (see Table 2). ABI enables an autoboot signal when a battery is connected at BATT and is independent of POK . If POK is pulled low, the booting assistant always drives ABO high (MAX8844Z) or ABO low (MAX8844Y), regardless of ABI. ABI is pulled to GND through an internal 200k Ω resistor.  If  ABI  is  supplied from an outside exposed pin, an RC filter (R1/C2 in Figure 2) is required for ESD protection and noise filtering. If  ABI  is  supplied  by  a  system's internal GPIO, or logic, the RC filter is not required.

Battery Pack Detection Input (DETBAT) DETBAT is a battery pack ID resistor detector that enables the battery charger if pulled low through a resistor  that  is  &lt;  51k Ω .  By  installing  a  shunt  on  JU2, DETBAT is pulled to ground through R5 (4.7k Ω ).  If DETBAT is left unconnected, or the pulldown resistor is 51k Ω or greater, the battery charger is disabled.

## POK Output

The open-drain POK output asserts low when 2.35V ≤ (VIN or VUSB) ≤ 7V, [(VIN or VUSB) - VBATT] ≥ 40mV (typ VIN or VUSB rising), and DETBET is pulled low through a resistor that is &lt; 51k Ω . POK is high impedance during shutdown. When interfacing with a microprocessor logic input, a pullup resistor to the microprocessor's I/O voltage may be required. If DETBAT is not used, connect DETBAT to GND for normal operation.

## Autobooting Assistant

The MAX8844Z/MAX8844Y contain an autobooting assistant circuit that generates an enable signal for system booting (MAX8844Z = ABO, MAX8844Y = ABO ). The booting assistant functions as an internal OR gate (refer to the MAX8844Z/MAX8844Y IC data sheet). The first input is dependent on the input supply voltage (VIN or  VUSB) and DETBAT, while the second input is an external signal applied to ABI. The first input ( POK )  is driven high once DETBAT is pulled low through a resistor  &lt;  51k Ω ,  2.35V ≤ (VIN  or  VUSB) ≤ 7V, and [(VIN  or VUSB) - VBATT] ≥ 40mV (typ VIN or VUSB rising).

Table 2. Autobooting Output States

| ABI   | BATT        | POK            | CHARGER STATE       | ABO (MAX8844Z)   | ABO (MAX8844Y)   |
|-------|-------------|----------------|---------------------|------------------|------------------|
| Low   | Present     | High impedance | Shutdown            | Low              | High impedance   |
| High  | Present     | High impedance | Shutdown            | High             | Low              |
| Low   | Not present | Low            | Fast charge/top off | High             | Low              |
| Low   | Present     | Low            | Fast charge/top off | High             | Low              |

Note: Present indicates that VBATT ≥ 2V and not present indicates that battery is not connected.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Charger Enable Input

The MAX8844Z EV kit contains an active-low logic input ( EN )  used  to  enable  the  IC.  Drive EN low,  leave  JU1 unconnected, or connect EN to  GND to enable the charge-control circuitry. Drive EN high to disable the charge-control circuitry. EN has an internal 200k Ω pulldown resistor.

## Fast-Charge Current Setting

The maximum charging current is programmed by an external resistor connected from SETI to GND (R1 in Figure 2). Use the following equation to determine the fast-charge current (IFAST\_CHARGE):

<!-- formula-not-decoded -->

where IFAST\_CHARGE is in amperes and RSETI is in ohms. RSETI must always be 1.25k Ω or  higher  due  to the continuous charging current limit of 1ARMS. The voltage at SETI can be used to monitor the fast-charge current level.  The  output  current  from  SETI  is  1120µA per ampere of charging current. The output voltage at SETI is proportional to the charging current:

<!-- formula-not-decoded -->

The voltage at SETI is nominally 1.4V at the selected fast-charge current, and falls with charging current as the cell becomes fully charged or as the thermalregulation circuitry activates.

## MAX8844Z Evaluation Kit

## Top-Off Current Threshold Setting

The top-off current threshold is programmed by an external resistor connected from MIN to GND (R2 in Figure 2). Use the following equation to determine the top-off current (IMIN):

<!-- formula-not-decoded -->

where IMIN is in amperes and RMIN is in ohms.

## DC and USB Power Supplies

The IC operates from well-regulated DC sources and automatically selects between both input power-supply connections (see Table 3). If both sources are present at  the  same time, highest priority is given to the IN source. The IN source is selected to ensure the shortest charging time for the system since it is able to deliver  the  highest  current.  The  USB fast-charge current is fixed at 380mA.

The full charging input-voltage range for IN and USB is 4.25V to 7.5V. The device can withstand up to 28V on both inputs (IN and USB) without damage to the IC. If VIN or VUSB is &gt; 7.5V, the internal overvoltageprotection circuitry disables charging until the input falls  below  7.5V.  The  power  supplies  must  provide  at least  4.25V  at  the  desired  peak  charging  current  and stay below 7V when unloaded.

## Thermal Regulation

The thermal-regulation loop limits the MAX8844Z/ MAX8844Y die temperature to +115°C by reducing the charge current, as necessary. This feature not only protects the IC from overheating, but also allows a higher charge current without risking damage to the IC.

## Evaluating the MAX8844Y

To  evaluate  the  MAX8844Y  version,  order  the MAX8844YETD+ along with the MAX8844ZEVKIT+.

Table 3. Input Power-Supply Selection

| IN            | USB            | CHARGER STATE                      |
|---------------|----------------|------------------------------------|
| 4.25V V IN 7V | 4.25V V USB 7V | Enabled (selects IN power supply)  |
| 4.25V V IN 7V | Not present    | Enabled (selects IN power supply)  |
| Not present   | 4.25V V USB 7V | Enabled (selects USB power supply) |
| V IN 7.5V     | 4.25V V USB 7V | Disabled                           |
| 4.25V V IN 7V | V USB 7.5V     | Enabled                            |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Remove U1 and replace with the MAX8844YETD+ (Top Mark: AEN) and install a shunt on JU3. The MAX8844Y features an active-low autobooting logic output ( ABO ) and requires an external power supply (VI/O on the MAX8844Z EV kit) to achieve logic-high.

To evaluate the MAX8844Y and board operation, see Figures 1 and 3 and follow the same steps as listed in the Quick Start/Procedures section, but with the following procedure:

- 1) Preset the power supply (PS1) to 5V. Turn off the power supply. Do not turn on the power supply until all connections are completed.
- 2) Preset the power supply (PS2) to 5V. Turn off the power supply. Do not turn on the power supply until all connections are completed.
- 3) Preset the power supply (PS3) to 5V. Turn off the power supply. Do not turn on the power supply until all connections are completed.
- 4) Verify that a shunt is installed on JU1 ( EN ) to set the EV kit in disable mode.
- 5) Verify that a shunt is installed on JU2 (DETBAT).
- 6) Verify  that  a  shunt  is  installed  on  JU3.  Verify  that JU4 is open and a shunt is not installed.
- 7) Connect the positive lead of the power supply (PS1) to the EV kit pad labeled IN. Connect the negative lead of the power supply to the EV kit pad labeled GND.
- 8) Connect the positive lead of the power supply (PS2) to  the  EV  kit  pad  labeled USB. Connect the negative  lead  of  the  power  supply to the EV kit pad labeled GND.
- 9) Connect the positive lead of the power supply (PS3) to  the  EV  kit  pad  labeled  VI/O.  Connect  the  negative  lead  of  the  power  supply to the EV kit pad labeled GND.

## MAX8844Z Evaluation Kit

- 10) Observe correct Li+ cell polarity. Connect a singlecell  Li+  battery  and  10A ammeter, as shown in Figure 1. The positive lead of the ammeter must connect to BATT+ and the negative lead to the positive terminal of the Li+ battery.
- 11) Connect a digital multimeter (DMM1) across the Li+ battery. Connect the positive terminal of DMM1 to the positive terminal of the Li+ battery. Connect the negative terminal of DMM1 to the negative terminal of the Li+ battery and note the battery voltage. If VBATT &lt; 2.5V, the charger starts in precharge mode. If VBATT ≥ 2.5V, the charger starts in fast-charge mode.
- 12) Connect a digital multimeter (DMM2) from ABO (MAX8844Y only) to GND.
- 13) Connect a digital multimeter (DMM3) from SAFEOUT to GND.
- 14) Connect  a  digital  multimeter  (DMM4)  from SAFEUSB to GND.
- 15) Turn on PS1 and then turn on PS3.
- 16) Remove the shunt on JU1 to set the EV kit in enable mode.
- 17) Verify that D2 is emitting light indicating POK is low.
- 18) Verify  that  the  voltage  read  by  DMM3 is  approximately 4.7V.
- 19) If the charger is in fast-charge mode, verify that the ammeter reads approximately 440mA. If the charger  is  in  precharge  mode,  verify  that  the  ammeter reads 48mA.
- 20) Verify that D1 is emitting light indicating that CHG is low and the battery charger is on. Note : If the battery is fully charged, D1 will not emit light.
- 21) Verify that the voltage read by DMM2 is 0V.
- 22) When the battery is fully charged, DMM1 reads 4.2V.
- 23) Remove the shunt on JU2 and verify that D1 and D2 are not emitting light.
- 24) Install a shunt on JU2.
- 25) Turn off the input power supply (PS1).
- 26) Verify  that  D2  is  not  emitting  light  and  the  voltage read by DMM2 is 5V.
- 27) Install a shunt on JU4.
- 28) Verify  that  the  voltage  read  at  DMM2  is  approximately 5V.
- 29) Increase PS1 to 8V.
- 30) Verify that D1 and D2 are not emitting light and the voltage read by DMM3 is 0V.
- 31) Install a shunt on JU1.
- 32) Turn off PS1 and then turn on PS2.
- 33) Remove the shunt on JU1 to set the EV kit in enable mode.
- 34) Verify that D2 is emitting light indicating POK is low.
- 35) Verify  that  the  voltage  read  by  DMM4 is  approximately 4.7V.
- 36) If the charger is in fast-charge mode, verify that the ammeter reads approximately 380mA. If the charger  is  in  precharge  mode,  verify  that  the  ammeter reads 48mA.
- 37) Verify that D1 is emitting light indicating that CHG is low and the battery charger is on. Note : If the battery is fully charged D1 will not emit light.
- 38) Increase PS2 to 8V.
- 39) Verify that D1 and D2 are not emitting light and the voltage on DMM4 is 0V.

<!-- image -->

When evaluation of the MAX8844Z EV kit is completed, use the following steps to power down the EV kit:

- 1) Install a shunt on JU1.
- 2) Turn off all power supplies.
- 3) Remove the battery.
- 4) Disconnect all test leads from the EV kit.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8844Z Evaluation Kit

Figure 2. MAX8844Z EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8844Z Evaluation Kit

<!-- image -->

Figure 3. MAX8844Z EV Kit Schematic with MAX8844Y Installed

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8844Z Evaluation Kit

Figure 4. MAX8844Z EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX8844Z Evaluation Kit

<!-- image -->

Figure 5. MAX8844Z EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8844Z Evaluation Kit

Figure 6. MAX8844Z EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

12

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_