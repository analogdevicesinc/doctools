<!-- lastmod 2022-08-05 -->
## General Description

The MAX8606 evaluation kit (EV kit) is a fully assembled and tested surface-mount circuit board demonstrating the MAX8606 linear charger for single-cell Li+ batteries. The EV kit operates from either a 100mA/500mA USB port or a 4.25V to 14V input power supply; however, charging is disabled when the input voltage exceeds 5.8V. Charging is optimized for Li+ cells using a control algorithm that includes low-battery precharging, voltage and current-limited fast-charging, and top-off charging, while continuously monitoring the battery for overvoltage, over/under temperature, and charging time. A 3.5V to 4.2V SYS output, in conjunction with the low-RDSON battery switch, powers the system even when the battery is deeply discharged or not installed. The charger status is indicated by two open-drain outputs. Two logic inputs ( EN1 and EN2 )  select  suspend mode, 100mA, 500mA, or 750mA fast-charge mode. The maximum charge current is programmable up to 1A. The MAX8606 is assembled in the space-saving 14-pin, 3mm x 3mm TDFN package.

| DESIGNATION   |   QTY | DESCRIPTION                                                            |
|---------------|-------|------------------------------------------------------------------------|
| C1            |     1 | 4.7µF ±10%, 16V X5R ceramic capacitor (0805) Taiyo Yuden EMK212BJ475KG |
| C2, C6        |     1 | 4.7µF ±10%, 6.3V X5R ceramic capacitors (0603) TDK C1608X5R0J475K      |
| C3, C4        |     1 | 0.1µF ±10%, 10V X5R ceramic capacitors (0402) TDK C1005X5R1A104K       |
| C5            |     1 | 1µF ±10%, 35V X5R ceramic capacitor (0603) Taiyo Yuden GDK107BJ105KA   |
| D1            |     1 | Small, green LED (T1 3/4) Mouser 512-HLMP1540 Fairchild HLMP1540       |
| J1            |     1 | USB type-B jack, right angle Kobiconn 154-2442                         |

<!-- image -->

## Features

- ♦ Selectable 100mA, 500mA, and Up to 1A Input Current Limits
- ♦ 4.25V to 14V Input Voltage Range
- ♦ Input Overvoltage Protection
- ♦ Battery Thermistor Input
- ♦ Charger Status Outputs
- ♦ Thermally Optimized Charge Rate
- ♦ Type-B USB Jack
- ♦ 14-Pin, 3mm x 3mm TDFN Package
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE          |
|--------------|--------------|---------------------|
| MAX8606EVKIT | 0°C to +70°C | 14 TDFN (3mm x 3mm) |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                            |
|---------------|-------|------------------------------------------------------------------------------------------------------------------------|
| JU1, JU2, JU3 |     3 | 3-pin headers 36-pin header, 0.1in centers (comes in 36-pin strips, cut to fit) Sullins PTC36SAAN Digi-Key S1012-36-ND |
| R1            |     1 | 23.7k Ω ±1% resistor (0402)                                                                                            |
| R2            |     1 | 100k Ω ±5% resistor (0402)                                                                                             |
| R3            |     1 | 330 Ω ±5% resistor (0402)                                                                                              |
| T1            |     1 | 10k Ω NTC thermistor (0603) Panasonic ERTJ1VR103                                                                       |
| U1            |     1 | MAX8606ETD (14-pin TDFN, 3mm x 3mm) (Top mark: AAF)                                                                    |
| U2            |     1 | MAX8881EUT33 (6-pin SOT23-6) (Top mark: AAHU)                                                                          |
| -             |     3 | Shunts Sullins STC02SYAN Digi-Key S9000-ND                                                                             |
| -             |     1 | MAX8606 EV kit PC board                                                                                                |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

1

## MAX8606 Evaluation Kit

## Required Equipment

- +6V, 1A variable power supply
- 1-cell Li+ battery

## Quick Start

The MAX8606 EV kit is fully assembled and tested. Follow these steps to verify board operation:

- 1) Verify  on  the  MAX8606 EV kit that there is a shunt between positions 1 and 2 on JU1 and positions 2 and 3 on JU2 to select the 750mA current limit.
- 2) Verify  on  the  MAX8606 EV kit that there is a shunt between positions 2 and 3 on JU3 to enable prequal and top-off charge timers.
- 3) Preset the power supply to 5V. Turn off the power supply. Do not turn the power supply on until all connections are made.
- 4) Connect the positive lead of the power supply to the VIN pad on the EV kit and the negative lead of the power supply to the GND pad on the EV kit.
- 5) Observe the correct Li+ cell polarity. Connect a single-cell Li+ battery across the BAT+ and BAT- pads on the EV kit.
- 6) Turn on the power supply to begin charging.
- 7) Verify that the green LED turns on.
- 8) The green LED is on until the battery voltage reaches 4.2V and the charge current is less than 50mA.
- 9) Charging is terminated 30 minutes after the green LED turns off.

## Detailed Description

## Input Source

The MAX8606 is designed to charge a single-cell Li+ battery from a DC source voltage between 4.25V and 5.5V or a 100mA/500mA, 5V USB port. The MAX8606 accepts input voltages up to 14V but disables charging when the input voltage exceeds 5.8V. A type-B USB jack is available to connect the MAX8606 EV kit to a standard 100mA/500mA USB port to power the EV kit.

## Charge Profile

The MAX8606 charger uses voltage-, current-, and thermal-control loops to facilitate safe charging of a single Li+ cell. When a Li+ battery with a cell voltage below 3V is inserted, the charger enters the prequalification stage where it precharges with a 100mA charge current. Once the cell has passed 3V, the charger soft-starts as it enters the fast-charge mode. The fast-charge current level is selectable using the EN1 and EN2 inputs. A green LED indicates the charge status. As the battery voltage approaches 4.2V, the charging current is reduced. If the battery current drops to 50mA and the battery voltage is 4.2V, the green LED turns off, signaling the battery is fully charged. See Table 1. If, at any point while charging the battery, the MAX8606 die temperature exceeds the temperature-regulation threshold (+100°C), the MAX8606 reduces the charging current so the die temperature is limited to approximately +100°C.

## SYS Output

The MAX8606 contains a SYS output that delivers up to 1A at 3.5V to 4.2V to power an external system. When VBAT exceeds 3.5V or when the MAX8606 is in suspend mode, the MAX8606 internally connects SYS to BAT through a 50m Ω switch. When charging a battery, the load on SYS is serviced first and the remaining available current goes to charge the battery. SYS is connected to BAT when the input voltage is not valid.

## Setting the Charge Current (SETI, EN1 , EN2 )

The MAX8606 EV kit features an easily adjustable charge-current limit using JU1 and JU2. JU1/JU2 allow the user to select one of three charge-current levels. Place a shunt between positions 2 and 3 of JU1 and 2 and 3 of JU2 to select a 100mA charge current. Place a shunt between positions 2 and 3 of JU1 and between positions 1 and 2 of JU2 to select a 500mA charge current.  Place a shunt between positions 1 and 2 of JU1 and between positions 2 and 3 of JU2 to select the adjustable maximum charge current (preset at 750mA max). See Table 2.

To set the maximum charge-current level, replace R1 with a resistor calculated as follows:

<!-- formula-not-decoded -->

where ICHARGE(MAX) and ISYS are in amps and R1 is in ohms. Refer to the MAX8606 data sheet for more details.

## Monitoring the Charge Current

The IMON pad is available to monitor the input current (ISYS + IBAT). The voltage at IMON is related to the input current as follows:

VIMON = (IBAT + ISYS) x RSETI / 8000

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Suspend Mode

EN1 and EN2 are also used to disable the charger control  circuitry.  Place a shunt between positions 1 and 2 of JU1 and JU2 to disable the MAX8606. Use JU1 and JU2 to enable and select a charge current for the MAX8606. See Table 2.

## Charge Timer

The MAX8606 includes a 30-minute prequalification fault timer, an 8-hour fast-charge fault timer, and a 30minute top-off timer. Charging is suspended and the CHG output blinks if  the  prequal  or  fast-charge  cycle has not completed when the corresponding timer expires. Place a shunt between positions 2 and 3 of JU3 to enable the internal timers. Place a shunt between positions 1 and 2 of JU3 to disable the internal timers and allow an external device to determine charge times. See Table 3.

## Thermal Control

The MAX8606 features a thermal limit that reduces the charge current when the die temperature exceeds +100°C. As the temperature increases above +100°C, the IC lowers the charge current by 50mA/°C.

## CHG Output

CHG is an open-drain output that indicates charger status. CHG goes low during prequal and fast-charge cycles. CHG goes high impedance when the battery voltage reaches 4.2V and the charge current drops below 50mA. The MAX8606 EV kit uses a green LED to signal charging cycles. When the MAX8606 is used in conjunction with a microprocessor, remove the green

## Table 1. Charge States

| V IN                | V BAT             | I BAT    | POK            | LED   | STATE            |
|---------------------|-------------------|----------|----------------|-------|------------------|
| ≤ (V BAT + 250mV)   | Don't Care        | 0        | High Impedance | Off   | Disabled         |
| 4.25V ≤ V IN ≤ 5.8V | < 3V              | 100mA    | Low            | On    | Prequalification |
| 4.25V ≤ V IN ≤ 5.8V | 3V ≤ V BAT < 4.2V | I FAST * | Low            | On    | Fast-Charge      |
| 4.25V ≤ V IN ≤ 5.8V | 4.2V              | < 50mA   | Low            | Off   | Top-Off          |
| > 5.8V              | Don't Care        | 0        | High Impedance | Off   | Overvoltage      |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8606 Evaluation Kit

LED and connect a pullup resistor between CHG and the logic I/O voltage to indicate charge status to the µP.

The CHG output also signals the user when a fault occurs. CHG 'blinks' at a rate of 2Hz when the prequal timer expires and the battery voltage has not exceeded 3V (typ) or when the fast-charge time expires and the battery current has not dropped below 50mA (typ). Toggle the input power to reset the IC.

## POK Output

The MAX8606 contains an open-drain POK output that goes low when a valid input source is detected at IN. A valid input source is one whose voltage is between 4V and 5.8V. After a valid input has been established, charging is sustained with inputs as low as 3.5V as long as the input voltage remains above the battery voltage by at least 50mV. POK is high impedance otherwise.

## THM Input

The MAX8606 monitors battery temperature through an NTC thermistor (T1) that is in close thermal contact with the battery. The installed thermistor resistance is 10k Ω at +25°C and has a beta of 3500 Kelvins. The IC monitors  the  resistance  from  THM to GND and suspends charging when it is greater than 28.7k Ω or  less  than 3.97k Ω ,  which  translates  to  a  battery  temperature  of 0°C to +50°C. Short the THM pad to GND on the EV kit to disable the temperature control function.

## Logic Supply

The MAX8606 EV kit contains a circuit that supplies the kit with a 3.3V logic supply. U2, C5, and C6 make up the logic circuit and are not needed in the final application.

## MAX8606 Evaluation Kit

## Component Suppliers

| SUPPLIER    | COMPONENT   | PHONE        | WEBSITE                 |
|-------------|-------------|--------------|-------------------------|
| Kobiconn    | USB jack    | 800-346-6873 | www.mouser.com/Kobiconn |
| Panasonic   | Resistors   | 714-373-7366 | www.panasonic.com       |
| Taiyo Yuden | Capacitors  | 408-573-4150 | www.t-yuden.com         |
| TDK         | Capacitors  | 888-835-6646 | www.component.tdk.com   |
| Vishay      | Resistors   | 402-563-6866 | www.vishay.com          |

Note: Indicate you are using the MAX8606 when contacting these manufacturers.

## Table 2. Jumpers JU1 and JU2 ( EN1 and EN2 Control)

| JU1 SHUNT LOCATION   | JU2 SHUNT LOCATION   | EN1                 | EN2                 | MODE                            |
|----------------------|----------------------|---------------------|---------------------|---------------------------------|
| 2 and 3              | 2 and 3              | Connect to GND      | Connect to GND      | 100mA Charge Current            |
| 2 and 3              | 1 and 2              | Connect to GND      | Connected to VLOGIC | 500mA Charge Current            |
| 1 and 2              | 2 and 3              | Connected to VLOGIC | Connect to GND      | 8000 x 2.1V / R1 Charge Current |
| 1 and 2              | 1 and 2              | Connected to VLOGIC | Connected to VLOGIC | Suspend                         |

Table 3. Jumper JU3 Function ( TMR Control)

| JU3 SHUNT LOCATION   | TMR              | INTERNAL TIMER STATE   |
|----------------------|------------------|------------------------|
| 1 and 2              | Connected to VIN | Disabled               |
| 2 and 3              | Connect to GND   | Enabled                |

## Jumper Settings

## MAX8606 Evaluation Kit

<!-- image -->

Figure 1. MAX8606 EV Kit schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8606 Evaluation Kit

Figure 2. MAX8606 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

Figure 4. MAX8606 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

Figure 3. MAX8606 EV Kit PC Board Layout-Component Side

<!-- image -->