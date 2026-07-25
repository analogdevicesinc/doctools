<!-- lastmod 2022-08-05 -->
## General Description

The MAX8601 evaluation kit (EV kit) is a fully assembled and tested surface-mount PC board demonstrating the MAX8601 single-cell, linear Li+ battery charger. The EV kit  operates from either a 100mA/500mA USB port or a 4.15V to 14V input power supply; however, charging is disabled when the input voltage exceeds 7V. Charging is optimized for Li+ cells using a control algorithm that includes low-battery precharging, voltage, and currentlimited fast charging, and top-off charging, while continuously monitoring the battery for overvoltage, over/undertemperature, and charging time.

The charger timeout protection is programmable. The charger status is indicated by three open-drain outputs. The MAX8601 automatically selects between either a USB or an AC-adapter input source. The AC-adapter charge current is programmable, while the USB charge current is preset not to exceed either 100mA or 500mA, depending on the USEL input. The MAX8601 EV kit also evaluates the MAX8600 with no PC board modification. The MAX8601 is assembled in the space-saving 3mm x 3mm, 14-pin TDFN package.

| DESIGNATION   |   QTY | DESCRIPTION                                                               |
|---------------|-------|---------------------------------------------------------------------------|
| C1, C2        |     2 | 1µF ±10%, 16V X5R ceramic capacitors (0603) Taiyo Yuden EMK107BJ105KA     |
| C3            |     1 | 0.068µF ±20%, 16V X5R ceramic capacitor (0603) Taiyo Yuden EMK107BJ683MA  |
| C4            |     1 | 2.2µF ±10%, 6.3V X5R ceramic capacitor (0603) TDK C1608X5R0J225K          |
| D1            |     1 | Small red LED Mouser 512-HLMP-1700                                        |
| J1            |     1 | Male USB type-B connector, right angle Digikey AE1085-ND ASSMANN AU-Y1007 |
| JU1, JU2, JU4 |     3 | 2-pin headers SULLINS PTC36SAAN DIGIKEY S1012-36-ND                       |

- ♦ Dual-Input Li+ Charger
- ♦ Up to 1A Programmable Fast Charge (from DC)
- ♦ 100mA/500mA USB Select Input
- ♦ 4.15V to 7V Operating Voltage Range
- ♦ 14V Input Overvoltage Protection for USB and DC
- ♦ Programmable On-Chip Charge Timers
- ♦ Battery Thermistor Input
- ♦ Charger Status Outputs
- ♦ Logic-Low Enable Input
- ♦ Thermally Optimized Charge Rate
- ♦ Male Type-B USB Jack
- ♦ 14-Pin (3mm x 3mm) TDFN Package
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE          |
|--------------|--------------|---------------------|
| MAX8601EVKIT | 0°C to +70°C | 14 TDFN (3mm x 3mm) |

Note: To evaluate the MAX8600, request a free sample with the MAX8601EVKIT.

## Component List

| DESIGNATION    |   QTY | DESCRIPTION                                        |
|----------------|-------|----------------------------------------------------|
| JU3            |     1 | 3-pin header SULLINS PTC36SAAN DIGIKEY S1012-36-ND |
| R1, R2, R4, R5 |     4 | 100k Ω ±5% resistors (0603)                        |
| R3, R9         |     2 | 1k Ω ±5% resistors (0603)                          |
| R6             |     1 | 6.04k Ω ±1% resistor (0603)                        |
| R7, R8         |     2 | 3.01k Ω ±1% resistors (0603)                       |
| U1             |     1 | MAX8601ETD (14-pin TDFN 3mm x 3mm)                 |
| -              |     4 | Shunts SULLINS STC02SYAN Digi-key S9000-ND         |
| -              |     1 | MAX8601 EV kit PC board                            |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

1

<!-- image -->

## Features

## MAX8601 Evaluation Kit

## Recommended Equipment

- 20V, 2A variable power supply
- 5V power supply
- 1-cell Li+ battery
- Digital voltmeter (DVM)

## Quick Start

The MAX8601 EV kit is fully assembled and tested. Follow these steps to verify board operation.

- 1) Verify on the MAX8601 EV kit that there is no shunt on JU2.
- 2) Verify  on  the  MAX8601 EV kit that there is a shunt between positions 1 and 2 on JU3 to select a 750mA DC charge current.
- 3) Verify  on  the  MAX8601 EV kit that there is a shunt on JU4 to disable the THM input.
- 4) Preset the variable 2A power supply to +5V. Turn off  the  power  supply. Do not turn on the power supply until all connections are made.
- 5) Ensure that the 5V power supply is off. Do not turn on the power supply until all connections are made.
- 6) Connect the positive lead of the 2A power supply to the DCIN pad on the EV kit and the negative lead of the power supply to the GND pad on the EV kit.
- 7) Connect the positive lead of the 5V power supply to the VLOGIC pad on the EV kit and the negative lead of the power supply to the GND pad on the EV kit.
- 8) Connect the DVM from BAT+ to BAT-.
- 9) Turn on the power supplies. Verify that the BAT+ voltage is 4.2V.
- 10) Determine the correct Li+ cell polarity. Connect the positive side of the single-cell Li+ battery to BAT+. Connect the negative side of the single-cell Li+ battery to BAT-. Monitor charging cycles.
- 11) Repeat steps using the USB input.

## Detailed Description

## Input Source

The MAX8601 is designed to charge a single-cell Li+ battery from a 4.15V to 7V DC source voltage or a 100mA/500mA 5V USB port. The MAX8601 accepts input  voltages  up  to  14V,  but  disables  charging  when the input voltage exceeds 7.5V. A male, B-type USB jack is  available  to  connect  the  MAX8601 EV kit to a standard 100mA/500mA USB port to power the EV kit. Note that the +5V logic input supply is required when charging from USB.

## Charge Profile

The MAX8601 charger uses voltage, current, and thermal control loops to facilitate charging of a single Li+ cell and to protect the battery. When a Li+ battery with a cell voltage below 3V is inserted, the charger enters the prequalification stage, precharging the cell with 10% of the user-programmed fast-charge current. Once the cell voltage rises above 3V, the charger softstarts  into  the  fast-charge  stage.  The  fast-charge  current  level  is  programmed with a resistor from SETI to GND (JU3). A red LED indicates the charge status. As the battery voltage approaches 4.2V, the charging current is reduced. If the battery current drops below 7.5% of the fast-charging current, the red LED turns off signaling the battery is charged; however, charging continues for an additional 30 minutes to top off the battery. After  charging is complete, the charger restarts if the battery voltage falls below 4.05V. See Table 1 for a description of the charge states.

## Setting the Charge Current (SETI, USEL)

The MAX8601 EV kit features an easily adjustable charge-current limit using JU3. JU3 allows the user to select one of three charge-current levels. Remove the shunt to select a 500mA charge current, place the shunt between positions 1 and 2 to select 750mA charge current or between 2 and 3 to select a 1A charge current.

## Component Suppliers

| SUPPLIER    | COMPONENT   | PHONE        | WEBSITE               |
|-------------|-------------|--------------|-----------------------|
| Assmann     | USB jack    | 877-ASSMANN  | www.assmann.com       |
| Panasonic   | Resistors   | 714-373-7366 | www.panasonic.com     |
| Taiyo Yuden | Capacitors  | 408-573-4150 | www.t-yuden.com       |
| TDK         | Capacitors  | 888-835-6646 | www.component.tdk.com |
| Vishay      | Resistors   | 402-563-6866 | www.vishay.com        |

Note: Indicate you are using the MAX8600/MAX8601 when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX8601 Evaluation Kit

Table 1. Charge States with THM = GND or 3.94k Ω &lt; RTHM &lt; 28.3k Ω

| CONDITIONS   | CONDITIONS   | CONDITIONS          | RESULTS       | RESULTS   | RESULTS   | RESULTS                                  |
|--------------|--------------|---------------------|---------------|-----------|-----------|------------------------------------------|
| EN           | POK *        | V BAT               | I BAT         | LED       | FLT       | STATE                                    |
| Low          | High         | X                   | 0             | Off       | High      | Off                                      |
| Low          | Low          | V BAT < 3V          | 10% of I FAST | Off       | High      | Prequal                                  |
| Low          | Low          | 3V < V BAT < 4.2V   | I FAST        | On        | High      | Fast-Charging in Controlled Current Mode |
| Low          | Low          | 4.2V                | > 7.5% I FAST | On        | High      | Fast-Charging in Controlled Voltage Mode |
| Low          | Low          | 4.2V                | < 7.5% I FAST | Off       | High      | Top-Off                                  |
| Low          | Low          | 4.05 < V BAT < 4.2V | 0             | Off       | High      | Charging Done                            |
| High         | High         | X                   | 0             | Off       | High      | Off                                      |
| Low          | Low          | < 3V                | 0             | Off       | Low       | Timeout in Prequalification Mode         |
| Low          | Low          | 3V < V BAT < 4.2V   | 0             | Off       | Low       | Timeout in Charge Mode                   |

If  another charge-current level is desired, remove the shunt and replace R7 with a resistor calculated as follows:

<!-- formula-not-decoded -->

where ICHARGE(MAX) is in amps and R7 is in ohms. Refer to the MAX8600/MAX8601 IC data sheet for more details.

When using the USB input, charge current is selected using the USEL input (JU1). Drive USEL low by connecting a shunt across JU1 to select 95mA charge current. Drive USEL high by removing the shunt from JU1 to select a 475mA charge current.

## EN Input

EN is a logic input (active low) that enables the charger. Drive EN high by connecting a shunt across JU2 to disable the charger control circuitry. Drive EN low by removing the shunt from JU2 to enable the MAX8601.

## Timer Capacitor Selection

The MAX8601 contains internal timers for prequalified fast-charge and top-off states. These time periods are determined by the capacitance from CT to GND (C3). To set the charge times, calculate C3 as follows:

<!-- formula-not-decoded -->

Note that tPREQUAL = tTOPOFF = 1/10 x tFASTCHARGE

## Thermal Control

The MAX8601 features a thermal limit that reduces the charge current when the die temperature exceeds +100°C. As the temperature increases, the IC lowers the charge current by 50mA/°C above +100°C when IFAST is set to 1A.

<!-- image -->

## CHG Output

CHG is an open-drain output that indicates charger status. CHG goes low during charge cycles where VBAT is greater than 3V and IBAT is greater than 7.5% of the maximum charge current set by RSETI. The MAX8601 EV kit uses a red LED to signal charging cycles.

## FLT Output

The MAX8601 contains an open-drain FLT output to signal the user when a fault occurs. FLT goes low when the prequalified timer expires and the battery voltage has not exceeded 3V (typ), or when the fast-charge timer expires and the battery current has not dropped below 7.5% (typ) of the maximum fast-charge current set by RSETI. Toggle EN or the input power to clear the FLT indicator.

## POK Output

The MAX8601 contains an open-drain POK output that goes low when a valid input source is detected at DC or USB. A valid input source is one whose voltage exceeds the rising UVLO threshold of 4V, exceeds the battery voltage by 255mV, and does not exceed 7.5V. After a valid input has been established, charging is sustained with inputs as low as 3.5V as long as the input remains above the battery by at least 55mV. POK is high impedance when the charger is disabled.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8601 Evaluation Kit

## THM Input

The MAX8601 monitors battery temperature through a negative TC thermistor in close thermal contact with the battery.  Select  a  thermistor  resistance  that  is  10k Ω at +25°C and has a beta of 3500. The IC compares the resistance from THM to GND and suspends charging when it is greater than 28.3k Ω or  less  than  3.94k Ω , translating  to  battery  temperatures  of  0°C  and  +50°C, respectively. Remove the shunt from JU4 and connect the thermistor from the THM pad to GND to use the THM function. Connect a shunt across JU4 to disable the THM function.

## Jumper Settings

## Table 2. Jumper JU1 (USEL Control)

| JU1 SHUNT LOCATION   | USEL             | MODE                     |
|----------------------|------------------|--------------------------|
| On                   | Connect to GND   | 95mA USB charge current  |
| Off                  | Connected to VIN | 475mA USB charge current |

## Table 3. Jumper JU2 Function

(

## EN Control)

| JU2 SHUNT LOCATION   | EN               | MODE     |
|----------------------|------------------|----------|
| On                   | Connected to VIN | Disabled |
| Off                  | Connect to GND   | Enabled  |

## Table 4. Jumper JU3 Function (SETI Resistor Selection)

| JU3 SHUNT LOCATION   |   SETI RESISTOR (k Ω ) | CHARGE CURRENT   |
|----------------------|------------------------|------------------|
| Off                  |                   3.01 | 500mA            |
| Pins 1 and 2         |                   2.00 | 750mA            |
| Pins 2 and 3         |                   1.50 | 1A               |

## Table 5. Jumper JU4 Function (THM Control)

| JU4 SHUNT LOCATION   | THM                               | THM CONDITION   |
|----------------------|-----------------------------------|-----------------|
| On                   | Connected to GND                  | Disabled        |
| Off                  | Connect to an external thermistor | Enabled         |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8601 Evaluation Kit

<!-- image -->

Figure 1. MAX8601 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8601 Evaluation Kit

<!-- image -->

Figure 2. MAX8601 EV Kit Component Placement Guide-Top Silkscreen

Figure 3. MAX8601 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4. MAX8601 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

Boblet