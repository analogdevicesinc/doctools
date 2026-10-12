<!-- lastmod 2022-08-03 -->
## General Description

The MAX8672 evaluation kit (EV kit) is a fully assembled and tested PCB that evaluates the MAX8672 backupmanagement IC for NiMH batteries. The MAX8672 EV kit charges one- or two-cell NiMH batteries, with the EV kit configured for two-cell applications. Maximum batterycharge voltage, standard-charge current, and tricklecharge current are preprogrammed to 3V, 3mA, and 450µA, respectively, using external resistors. The programmable charge timer is set to 480 minutes. An adjustable battery undervoltage-lockout (UVLO) threshold  is  preset  to  1.6V  and  shuts  down  batterybackup functions.

To support system-supply voltages, the MAX8672 EV kit provides two outputs. Low-voltage backup cells are stepped up to a fixed 3.05V by a low quiescent-current synchronous-rectified step-up DC-DC converter capable of delivering up to 20mA. A low-dropout (LDO) output is  set  to  1.75V  and  is  capable  of  providing  up  to 20mA. The LDO output voltage is adjustable with external resistors.

The MAX8672 EV kit also features a thermistor input to monitor battery temperature (negative temperature coefficient (NTC) thermistor not included). To simulate a 100k Ω thermistor at TA = +25°C, the EV kit comes with a  100k Ω resistor  installed.  See  the Thermistor  Monitor section for details.

The MAX8672 EV kit comes fully assembled and tested and has an operating temperature range of -40°C to +85°C.

| DESIGNATION   |   QTY | DESCRIPTION                                                                                |
|---------------|-------|--------------------------------------------------------------------------------------------|
| C1            |     1 | 0.047µF ±10%, 10V X5R ceramic capacitor (0402) M ur atu GRM 155R7A473K ( or eq ui val ent) |
| C2            |     1 | 0.1µF ±10%, 10V X5R ceramic capacitor (0402) TD K C 1005X 5R1A104K ( or eq ui val ent)     |
| C3            |     1 | 47µF ±20%, 6.3V X5R ceramic capacitor (1206) TD K C 3216X 5R0J476M ( or eq ui val ent)     |
| C4            |     1 | 22µF ±20%, 6.3V X5R ceramic capacitor (1206) TD K C 3216X 5R0J226M ( or eq ui val ent)     |

## MAXIM

<!-- image -->

Features

- ♦ 2.7V to 5.5V Input-Voltage Range
- ♦ Charges One- or Two-Cell NiMH Backup Batteries
- ♦ Programmable Charge Voltage and Current
- ♦ Programmable Undervoltage-Lockout (UVLO) Threshold
- ♦ Programmable Charge Timer
- ♦
- Two Backup Output Voltages: 3.05V (Fixed), 20mA Step-Up DC-DC Converter 1.75V (Adjustable), 20mA LDO
- ♦ 14-Pin, 3mm x 3mm TDFN Package
- ♦ Lead-Free EV Kit
- ♦ Fully Assembled and Tested

## Ordering Information

| PART          | TEMP RANGE         | IC PACKAGE          |
|---------------|--------------------|---------------------|
| MAX8672EVKIT+ | -40 ° C to +85 ° C | 14 TDFN (3mm x 3mm) |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                 |
|---------------|-------|---------------------------------------------------------------------------------------------|
| C5            |     1 | 0.47µF ±10%, 6.3V X5R ceramic capacitor (0402) M ur ata GRM 155R60J474K ( or eq ui val ent) |
| C6            |     1 | 0.22µF ±10%, 6.3V X5R ceramic capacitor (0402) TD K C 1005X 5R0J224K ( or eq ui val ent)    |
| L1            |     1 | 4.7µH ±20% inductor TOKO 1098AS - 4R7M ser i es D E 2812C                                   |
| R1            |     1 | 549 Ω ±5% resistor (0402)                                                                   |
| R2            |     1 | 33.2k Ω ±1% resistor (0402)                                                                 |
| R3            |     1 | 221k Ω ±1% resistor (0402)                                                                  |

## MAX8672 Evaluation Kit

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                          |
|---------------|-------|--------------------------------------|
| R4            |     1 | 249k Ω ±1% resistor (0402)           |
| R5, R9, R10   |     3 | 100k Ω ±1% resistors (0402)          |
| R6            |     1 | 57.6k Ω ±1% resistor (0402)          |
| R7            |     1 | Not installed, resistor (0402)       |
| R8            |     1 | 7.5k Ω ±1% resistor (0402)           |
| U1            |     1 | MAX8672ETD+ (14-pin TDFN, 3mm x 3mm) |
| -             |     1 | MAX8672EVKIT+ PCB                    |

## Component Suppliers

| SUPPLIER   | PHONE        | WEBSITE               |
|------------|--------------|-----------------------|
| Murata     | 770-436-1300 | www.murata.com        |
| TDK Corp.  | 888-835-6646 | www.component.tdk.com |
| TOKO       | 408-432-8281 | www.toko.com          |

Note: Indicate that you are using the MAX8672 when contacting these component suppliers.

## Quick Start

## Required Equipment

- One variable DC power supply (referred to as PS1) capable of supplying up to 5.5V at 200mA
- One variable DC power supply (referred to as PS2) capable of supplying up to 5V at 200mA
- Two digital voltmeters (DVM)
- One 75 Ω , 1/4W resistor
- One ammeter
- One 20mA load (approximately 100 Ω )

## Procedure (Charging)

The MAX8672 EV kit is fully assembled and tested. Follow the steps below to verify charging operation:

- 1) Preset the variable DC power supply (PS1) to 3.3V. Turn off the power supply. Caution: Do not turn on the power supply until all connections are complete.
- 2) Preset the variable DC power supply (PS2) to 1.2V. Turn off the power supply. Caution: Do not turn on the power supply until all connections are complete.
- 3) Make connections to the EV kit as shown in Figure 1 and described in the following steps:
- a) Connect the 75 Ω resistor from the positive lead of PS2 to the negative lead of PS2. This allows PS2 to sink current to simulate a rechargeable backup battery.
- b) Connect the positive lead of PS1 to the VIN pad on the EV kit and connect the negative lead of PS1 to the GND pad on the EV kit.
- c) Connect the VIN pad of the EV kit to the BSTOUT pad of the EV kit.
- d) Connect the positive lead of the ammeter to the BATT pad on the EV kit. Connect the negative lead of the ammeter to the positive terminal of PS2. Connect the negative terminal of PS2 to the GND pad on the EV kit.
- e) Connect the positive lead of a DVM to the BATT pad on the EV kit and connect the negative lead of that DVM to the GND pad on the EV kit.
- 4) Turn on PS2 and then PS1.
- 5) Verify that the voltage at BATT is approximately 1.2V. Verify that the charging current from BATT is approximately 5.2mA. The MAX8672 is in deeprecovery charging mode.
- 6) Increase the voltage at BATT to 2V by adjusting PS2. Verify that the charging current from BATT is approximately 3mA. The MAX8672 is in standardcharge mode.
- 7) Increase the voltage at BATT to 3.1V by adjusting PS2. Verify that the charging current from BATT is 0mA. The MAX8672 charging function has ceased.
- 8) Decrease the voltage at BATT to 2.7V by adjusting PS2. Verify that the charging current from BATT is approximately 450µA. The MAX8672 is in tricklecharge mode.
- 9) Decrease the voltage at BATT to 2.4V by adjusting PS2. Verify that the charging current from BATT is approximately 3mA. The MAX8672 has returned to standard-charge mode.

## Procedure (Backup)

The MAX8672 EV kit is fully assembled and tested. Follow the steps below to verify backup operation:

- 1) Start with the charging configuration of Figure 1 and make connections as listed in the following steps:
- a) Replace the ammeter between BATT and PS2 with a wired connection.
- b) Connect the positive lead of a DVM to the BSTOUT pad on the EV kit and connect the negative lead of that DVM to the GND pad on the EV kit.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 1. Test Procedure Setup

<!-- image -->

- c) Connect the positive lead of the second DVM to the LDOOUT pad on the EV kit and connect the negative lead of that DVM to the GND pad on the EV kit.
- d) Connect a 20mA load (approximately 100 Ω ) from LDOOUT to GND.
- 2) Turn on PS2 and then PS1.
- 3) Verify that the voltage at the BSTOUT pad is approximately 3.3V. PS1 is holding up the supply, simulating a powered system.
- 4) Disconnect VIN from BSTOUT.
- 5) Turn off PS1. This step, and step 4, simulate main power going down.
- 6) Verify that the voltage at BSTOUT is approximately 3.05V. Verify that the voltage at LDOOUT is approximately 1.75V. The MAX8672 is now backing up the system supplies.

## Detailed Description

The MAX8672 EV kit is a fully assembled and tested PCB that evaluates the MAX8672 complete backupmanagement IC for NiMH batteries. The MAX8672 EV kit charges one- or two-cell NiMH batteries, with the EV kit configured for two NiMH cells. Maximum battery-charge voltage, standard-charge current, and trickle-charge current are preprogrammed using external resistors (see Figure 2). Resistor R6 programs maximum batterycharge voltage to 3V, resistor R2 programs standardcharge current to 3mA, and resistor R3 programs trickle-charge current to 450µA. For the default EV kit maximum battery-charge voltage of 3V, the corresponding

<!-- image -->

## MAX8672 Evaluation Kit

battery-voltage thresholds for starting trickle charge, restarting standard charge, and ending deep-recovery charge are 2.82V (VBATT falling), 2.45V (VBATT falling), and 2V (VBATT rising), respectively.

Capacitor C1 programs the duration of the charge timer, which is set for 480 minutes. The charge timer limits the duration of standard charging when the battery-charge limit is not reached. Refer to the MAX8672 IC data sheet for  more details on the charge timer and the charging cycle.

Resistor R9 programs the battery UVLO threshold to 1.6V. Battery UVLO shuts down battery-backup functions. Once UVLO occurs, the backup boost converter and LDO do not reactivate until a valid VIN and VBST are present.

To support system-supply voltages, the MAX8672 EV kit  provides  two  backup outputs. Low-voltage backup cells are stepped up by the on-chip DC-DC converter. The step-up converter output regulates to an internally fixed  3.05V and is capable of delivering up to 20mA. An on-chip LDO, programmed to regulate to 1.75V, provides up to 20mA. The LDO output voltage is adjusted by external resistors R4 and R5. Since the LDO is powered from the step-up converter output, the 20mA current rating is the sum of ILDO and IBST.

The MAX8672 typical application expects that a valid system voltage is connected to BST, and a valid input voltage is connected to IN, before backup is required. Otherwise, backup functionality cannot begin.

The MAX8672 EV kit also features a thermistor input (THM-, THM+) for monitoring battery temperature. To simulate a 100k Ω thermistor at TA = +25 ° C, the EV kit comes with a 100k Ω resistor (R10) installed. To evaluate the thermistor monitor, remove R10 and connect a 100k Ω at  TA = +25 ° C NTC thermistor to THM- and THM+. By selecting thermistor series and parallel resistances (R7 and R8), thermistor thresholds can be adjusted. See the Thermistor Monitor section for details.

## Customizing the MAX8672 EV Kit

## Setting the LDO Output Voltage (VLDOOUT)

The MAX8672 EV kit LDO output voltage is programmed to 1.75V by resistors R4 and R5. To program LDOOUT for other voltages between 1.5V and 3.05V, select R4 to be in the 100k Ω to 1M Ω range. Calculate R5 by using the following equation:

<!-- formula-not-decoded -->

where VFBL = 1.25V.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8672 Evaluation Kit

## Setting the Charge-Voltage Limit (VBATT(CHG))

The MAX8672 charges one- or two-cell NiMH batteries from a DC source voltage between 2.7V and 5.5V. Typically,  the  charge-voltage limit  (VBATT(CHG)) is set for  1.5V  per  cell.  VBATT(CHG) is  programmable from 1.5V to 3.0V by choosing the value of R6 using the following equation:

<!-- formula-not-decoded -->

For the selected VBATT(CHG), the corresponding charging-voltage thresholds are as follows (refer to the MAX8672 IC data sheet for details):

Falling battery threshold to begin trickle charge (VBATT(TRK)):

<!-- formula-not-decoded -->

Falling battery threshold to restart standard charge (VBATT(RSTRT)):

<!-- formula-not-decoded -->

Rising battery threshold to exit deep-recovery charge (VBATT(DR)):

<!-- formula-not-decoded -->

Setting the Standard-Charge Current (IBATT(CHG)) Standard charging of the battery occurs when the MAX8672 is first turned on (with a valid VBSTOUT and VIN present), or when the battery is discharged below the standard-charge restart threshold (VBATT(RSTRT)). Standard-charge current (IBATT(CHG)) is programmable from 0.1mA to 20mA by R2, and is preset to 3mA. The value of R2 is determined using the following equation:

<!-- formula-not-decoded -->

where IBATT(CHG) is in amps.

## Setting the Trickle-Charge Current (IBATT(TRK))

Trickle charge occurs whenever standard charge is interrupted by timeout, when VBATT falls to the tricklecharge threshold (VBATT(TRK)) after a complete charge cycle, or when THRM senses an out-of-temperature range condition (refer to the MAX8672 IC data sheet for more details). Trickle-charge current is programmable

## Charge Timer

The MAX8672 includes a charge timer that limits the duration of the standard charge and is programmable from 2 to 2000 minutes. The EV kit comes with the charge timer set to 480 minutes. Timer duration (tCHG) is programmed by C1, and is calculated using the following equation:

<!-- formula-not-decoded -->

where C1 is in µF.

## Setting the Deep-Recovery (DR) Charge Current (IBATT(DR))

When power is first applied to IN, if the battery voltage is  less  than  the  battery  DR  threshold  (VBATT(DR)),  DR connects an internally regulated voltage to an external resistor (R1) that sources extra current into the battery. The DR current-limiting resistor is typically selected for a 0.5C charge rate when the cell voltage is 0V. When DR is on, both the standard-charge current and the DR current charge the battery. When the cell voltage reaches VBATT(DR), the DR current is turned off and standard charging begins. The maximum current out of DR (IDR) is limited to 4.5mA for the R1 value of 549 Ω . The value of R1 for maximum DR charge current is determined by:

<!-- formula-not-decoded -->

where IBATT(DR) is the maximum total charge current when VBATT is 0V and is the sum of IDR and IBATT(CHG) in amps.

The MAX8672 EV kit comes with IBATT(DR) programmed for 7.5mA, corresponding to a 0.5C charge rate for a 15mA-hr NiMH cell.

## Setting the Undervoltage Lockout (UVLO)

When the backup battery discharges to a programmed voltage threshold (VBATT(UV)), the BATT UVLO is engaged, causing the MAX8672 backup functions to cease. Typically, UVLO is set for 0.8V per NiMH cell. For the default MAX8672 EV kit, the UVLO threshold is

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

from 0.1mA to 1.0mA and is preset to 450µA. Program trickle-charge current by the selection of R3 as follows:

<!-- formula-not-decoded -->

where IBATT(TRK) is in amps.

set at 1.6V. The UVLO threshold is programmable from 0.8V to 3.5V by R9 using the following equation:

<!-- formula-not-decoded -->

The MAX8672 EV kit substitutes a 100k Ω resistor (R10) for the NTC thermistor to simulate a 100k Ω thermistor at TA = +25 ° C. To use an actual thermistor, remove R10 and connect the thermistor to THM+ and THM- (see Figure 2).

## Thermistor Monitor

With the 100k Ω NTC thermistor installed (and R10 removed), the MAX8672 thermistor monitor suspends standard charging (and pauses the standard-charge timer)  when the thermistor temperature moves above +50 ° C or below -0.6 ° C. The thermistor must be an NTC type with a nominal TA = +25 ° C temperature of 100k Ω . The temperature trip thresholds are adjusted by adding external resistors in series and in parallel with the

## MAX8672 Evaluation Kit

specified thermistor. Resistors R7 and R8 provide pads to  connect external resistors (see Figure 2) to adjust the  temperature trip threshold. For the specified thermistor, example resistor values are shown in Table 1.

## Table 1. Series/Parallel Resistors for Different Thermistor* Thresholds

| SERIES ( Ω )   | PARALLEL ( Ω )   |   HOT TEMP ( o C) |   COLD TEMP ( o C) |
|----------------|------------------|-------------------|--------------------|
| 0              | -                |                45 |                 -1 |
| 7.5k           | -                |                50 |               -0.6 |
| 13.7k          | -                |                55 |               -0.3 |
| 18.7k          | -                |                60 |                  0 |
| 18.8k          | 6.8M             |              59.9 |                 -1 |
| 22.7k          | -                |                65 |                  0 |
| 23k            | 5.6M             |                65 |                 -1 |
| 8.6k           | 1.7M             |                50 |                 -5 |

*100k Ω thermistor at +25 ° C with B = 3977.

<!-- image -->

Figure 2. MAX8672 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8672 Evaluation Kit

<!-- image -->

Figure 3. MAX8672 EV Kit Component Placement GuideComponent Side

Figure 4. MAX8672 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 5. MAX8672 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

6

JOSE