<!-- lastmod 2022-08-05 -->
## General Description

The MAX1501 evaluation kit (EV kit) is a complete, fully assembled and tested circuit board that demonstrates the highly integrated MAX1501 linear battery charger for a single-cell lithium-ion (Li+) or a 3-cell NiMH/NiCd battery. The EV kit safely charges a single Li+ battery to 4.1V or 4.2V or a 3-cell NiMH/NiCd to 4.5V or 4.95V (4.95V must collaborate with the microprocessor control). The EV kit accepts a power-supply input of 4.5V to 13V, but disables charging when the input voltage exceeds 6.5V. Jumpers on the EV kit allow adjustments to the total charging time, battery voltage levels, top-off current, die temperature regulation levels, and charging modes. LEDs on the board indicate the status of the charging cycle.

| DESIGNATION   |   QTY | DESCRIPTION                                                                                    |
|---------------|-------|------------------------------------------------------------------------------------------------|
| C1            |     1 | 1µF ± 10%, 16V X7R ceramic capacitor (0805) TDK C2012X7R1C105KT or Taiyo Yuden EMK212BJ105KG   |
| C2            |     1 | 10µF ± 20%, 6.3V X5R ceramic capacitor (0805) TDK C2012X5R0J106MT or Taiyo Yuden JMK212BJ106MG |
| D1            |     1 | Red surface-mount LED (0603) Panasonic LNJ208R8ARA                                             |

<!-- image -->

## Features

- ♦ Simple Stand-Alone Li+ or NiMH/NiCd Battery Charger
- ♦ Safely Precharges Deeply Discharged Li+ Cells
- ♦ 4.5V to 13V Input Voltage Range
- ♦ 6.5V Overvoltage Protection Threshold
- ♦ Programmable Charging Modes
- ♦ Programmable Battery Voltage Levels
- ♦ Programmable Top-Off Charging Thresholds
- ♦ Programmable Safety Timer
- ♦ Programmable Die Temperature Regulation SetPoints
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE       | IC PACKAGE   |
|--------------|------------------|--------------|
| MAX1501EVKIT | 0 ° C to +70 ° C | 16 Thin QFN  |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                          |
|---------------|-------|------------------------------------------------------|
| D2            |     1 | Green surface-mount LED (0603) Panasonic LNJ308G84RA |
| JU1-JU6       |     6 | 3-pin headers                                        |
| R1            |     1 | 2.8k Ω ± 1% resistor (0603)                          |
| R2            |     1 | 100k Ω ± 5% resistor (0603)                          |
| R3, R4        |     0 | Not installed, resistors (0603)                      |
| U1            |     1 | MAX1501ETE (16-pin thin QFN)                         |
| None          |     6 | Shunts (JU1-JU6)                                     |
| None          |     1 | MAX1501 PC board                                     |

## Component Suppliers

| SUPPLIER    | PHONE        | FAX          | WEBSITE               |
|-------------|--------------|--------------|-----------------------|
| Panasonic   | 714-373-7366 | 714-737-7323 | www.panasonic.com     |
| Taiyo Yuden | 800-348-2496 | 847-925-0899 | www.t-yuden.com       |
| TDK         | 847-803-6100 | 847-390-4498 | www.component.tdk.com |

Note:

Please indicate you are using the MAX1501 when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1501 Evaluation Kit

## Quick Start

The MAX1501 EV kit is a fully assembled and tested surface-mount board. Follow the steps below to verify board operation. Do not turn on the power supply until indicated:

- 1) Verify that shunts are installed across pins 2 and 3 of jumpers JU1 (3hr charge time), JU2 (top-off set to  10% of fast-charge current), and JU3 (+95 ° C regulated maximum die temperature).
- 2) Verify that shunts are installed across pins 2 and 3 of jumpers JU4 ( MODE ) and JU5 ( CHGEN ) to program the EV kit for Li+ charge mode.
- 3) Verify that a shunt is installed across pins 1 and 2 of jumper JU6 to set the charging voltage to 4.2V.
- 4) Connect a 3V to 5.5V source across the VLOGIC and GND pads of the EV kit.
- 5) Connect a voltmeter across the ACOK and GND pads of the EV kit.
- 6) Observe correct Li+ cell polarity. Connect a single-cell  Li+  battery  across  the  BATT+  and  BATTpads of the EV kit.
- 7) Connect a 4.5V to 6.5V power supply across the VIN and GND pads of the EV kit. The positive terminal connects to the VIN pad.
- 8) Turn on the power supply to begin charging.
- 9) Verify  that ACOK asserts a logic low. A logic-low output on ACOK indicates that VIN is at the safe range of 4.5V and 6.5V.
- 10) The red LED D1 turns on and the green LED D2 remains off during prequalification and fast-charge conditions. The red LED turns off and the green LED turns on during top-off or when the charger times out.

## Detailed Description

The MAX1501 EV kit demonstrates the highly integrated, stand-alone, MAX1501 linear battery charger for a single-cell Li+ battery or a 3-cell NiMH/NiCd battery pack. The EV kit safely charges a single Li+ battery to 4.1V or 4.2V or 3-cell NiMH/NiCd to 4.5V or to 4.95V with a microprocessor to control the charge sequence. The EV kit accepts a power-supply input of 4.5V to 13V, but disables charging when the input voltage exceeds 6.5V to prevent incorrect AC adapter inputs and excessive power dissipation during charging. Jumpers on the EV kit allow access to the MAX1501 input pins to configure  the  total  charging  time,  battery  voltage  levels, top-off  current,  die  temperature  regulation  levels,  and charging modes. LEDs are provided on the board to indicate the status of the charging cycle.

## Input Source

The MAX1501 EV kit requires a power supply with an output voltage of 4.5V to 6.5V for proper operation. The MAX1501 charger is designed to handle a maximum input voltage of 13V, but it disables charging when the input voltage exceeds the overvoltage protection threshold of 6.5V, or when the input voltage has not exceeded the undervoltage lockout threshold of 4.5V. For the 4.95V NiMH microprocessor-based charge mode, 5.25V minimum input voltage is required.

## VL

The MAX1501 linear charger contains an internal linear regulator available on the VL output pin. The regulator supplies a logic-high voltage level of 3V. The VL output pin is connected to pin 1 of all the jumpers on the EV kit board that are used to program the operational mode of the charger. The VL output pin is regulated to 3V whenever the input voltage is above 4.5V.

## Fast-Charge Current

The maximum battery charge current is programmed by resistor R1, which is connected between the SETI pin and ground. The EV kit's maximum charging current is  preset  to  500mA with  the  2.8k Ω resistor  installed  at R1. To reconfigure the charging current, refer to the Charge Current Selection section in the MAX1501 data sheet to select a new value for resistor R1.

## Charge Timer

The MAX1501 EV kit provides access to timer pin TMAX through jumper JU1. Configuring jumper JU1 allows the user to set the maximum charge time to either 3hr, 4.5hr, or 6hr. When the maximum charge time has elapsed, the charging cycle is terminated and the green LED is turned on, regardless of the state of the charging cycle. The timer and the charging cycle restart  automatically when the battery voltage drops below 95% of the Li+ programmed regulation voltage (4V in NiMH/NiCd mode), the input power is cycled (turned off and turned on), or the charger is disabled and enabled. See Table 1 for jumper JU1 configuration to set the maximum charge time.

## Table 1.  Jumper JU1 (TMAX)

| SHUNT LOCATION   | TMAX PIN         |   MAXIMUM CHARGE TIME (hr) |
|------------------|------------------|----------------------------|
| 1 and 2          | Connected to VL  |                          6 |
| None             | Floating         |                        4.5 |
| 2 and 3          | Connected to GND |                          3 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Table 2.  Jumper JU2 (FULLI)

| SHUNT LOCATION   | FULLI PIN        | TOP-OFF CURRENT            |
|------------------|------------------|----------------------------|
| 1 and 2          | Connected to VL  | 20% of fast-charge current |
| None             | Floating         | 30% of fast-charge current |
| 2 and 3          | Connected to GND | 10% of fast-charge current |

Table 3. Jumper JU3 (TEMP)

| SHUNT LOCATION   | TEMP PIN         |   MAXIMUM DIE TEMPERATURE (°C) |
|------------------|------------------|--------------------------------|
| 1 and 2          | Connected to VL  |                           +135 |
| None             | Floating         |                           +115 |
| 2 and 3          | Connected to GND |                            +95 |

## Top-Off Current Threshold

The MAX1501 EV kit features jumper JU2 that allows the  user  to  program  the  top-off  current  threshold  to  a percentage of the fast-charge current. If the fastcharge current falls below the programmed threshold, the charger turns off the red LED and turns on the green LED, signaling that charging is complete. During the top-off stage, the charger continues to source current  to  the  battery  until  the  timer  expires.  See  Table  2 for  jumper  JU2 configuration to set the top-off current threshold.

## Temperature Regulation Setting

The MAX1501 EV kit features jumper JU3, which allows the user to set the MAX1501 maximum operating die temperature. During charging, if the die approaches the programmed temperature setting, the charger reduces the charging current to keep the die temperature from exceeding that value. See Table 3 for jumper JU3 configuration to set the die temperature threshold.

## Modes of Operation

The MAX1501 charger can be programmed to operate in  several different modes by asserting logic-level signals  to  the CHGEN and MODE i nput  pins.  The MAX1501 EV kit includes jumpers JU4 and JU5, which allow the user to assert logic levels to these pins. A logic high (H) can be asserted on the CHGEN and MODE pins by placing the shunts across pins 1 and 2 of  jumpers JU5 and JU4, respectively. A logic low (L) can be asserted on the CHGEN and MODE pins by placing the shunts across pins 2 and 3 of jumpers JU5

<!-- image -->

## MAX1501 Evaluation Kit

Table 4. Programming Charging Modes and Regulation Voltage

| CHGEN (JU5)   | MODE (JU4)   | CHARGING MODE    | SELV (JU6)   | BATT+ VOLTAGE (V)   |
|---------------|--------------|------------------|--------------|---------------------|
| L*            | L*           | Li+ charge       | L            | 4.1                 |
| L*            | L*           | Li+ charge       | H*           | 4.2                 |
| L*            | H            | NiMH/NiCd charge | L            | 4.5                 |
| L*            | H            | NiMH/NiCd charge | H*           | 4.95                |
| H             | L*           | Disable          | X            | N/A                 |
| H             | H            | No-battery mode  | X            | 4.0                 |

*Does not require shunt on jumper

X = Don't care

and JU4, respectively, or by removing the shunts from the jumpers. The internal pulldown resistors on the CHGEN and MODE pins automatically assert a logic low when the shunts are removed from the jumpers. See Table 4 to configure the EV kit charging mode of operation.

## Regulation Voltage

The charging regulation voltage is dependent on the mode of operation and can be selected by configuring the SELV input pin with jumper JU6. In Li+ charge mode, the regulation voltage can be set to 4.1V or 4.2V. In NiMH/NiCd charge mode, the regulation voltage can be set to 4.5V or 4.95V. In no-battery mode, the charger regulates the output voltage to 4.0V, regardless of the SELV setting (see Table 4 to configure jumper JU6). The internal  pullup  resistors  on  the  SELV  pin  automatically assert a logic high when the shunt is removed from the jumper.

## Li+ Charge Mode

In  Li+  charge  mode, the MAX1501 charger uses voltage, current, and thermal-control loops to facilitate charging of a single Li+ cell and to protect the battery. When an Li+ battery with a cell voltage below 2.8V is inserted, the MAX1501 charger enters the prequalification stage where it precharges that cell with 10% of the user-programmed fast-charge current. Once the cell has passed 2.8V, the charger enters the fast-charge stage where it increases the charging current by 10% steps every 20ms until the charger reaches 100% fastcharge current programmed by resistor R1. During precharge and fast charge, the red LED is on and the green LED is off. As the battery voltage approaches the 4.2V/4.1V user-selected regulation voltage (SELV pin, JU6), the charging current is reduced.  If the charging current drops below the top-off current setting (FULLI pin,  JU2) or if  the  charge timer expires (TMAX pin,

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1501 Evaluation Kit

JU1), the green LED turns on and the red LED turns off, signaling that charging is complete. While the charger is  in  top-off,  it  continues  to  charge  until  the  timer expires. Once the timer has expired, the charger automatically reinitiates fast charging if the cell voltage drops below 95% of target voltage. If, at any point while charging the battery, the die temperature approaches the user-selected temperature setting (TEMP pin, JU3), the MAX1501 reduces the charging current so that the die temperature does not exceed the temperature regulation set point.

## NiMH/NiCd Charge Mode

In NiMH/NiCd charge mode, the MAX1501 charges 3cell  NiMH/NiCd batteries using voltage, current, and thermal-control loops. When a 3-cell NiMH/NiCd battery pack with a voltage below 2.8V is inserted, the MAX1501 charger enters the prequalification stage where it precharges the battery pack with 10% of the user-programmed fast-charge current. Once the cell has passed 2.8V, the charger enters the fast-charge stage where it increases the charging current by 10% steps every 20ms until the charger reaches 100% fastcharge current programmed by resistor R1. During precharge and fast charge, the red LED is on and the green LED is off. As the battery voltage approaches the 4.5V user-selected regulation voltage (SELV pin, JU6), the charging current is reduced. If the charging current drops below the top-off current setting (FULLI pin, JU2) or  if  the  charge  timer  expires  (TMAX pin, JU1), the green LED turns on and the red LED turns off, signaling that charging is complete. While the charger is in topoff, it continues to charge until the timer expires. Once the timer has expired, the charger automatically reinitiates fast charging if the cell voltage drops below 4V. If, at any point while charging the battery, the die temperature approaches the user-selected temperature setting (TEMP pin, JU3), the MAX1501 reduces the charging current so that the die temperature does not exceed the temperature regulation set point. When the voltage regulation setting of 4.95V is used, a microprocessor must be used to terminate the charging sequence using -∆ V or -∆ T/ ∆ t methods. Use an input of 5.5V when the regulation voltage is set to 4.95V. Without microprocessor controls, the 4.95V regulation voltage should not be used.

## Disable Mode

Disable mode disables the charger and terminates the charging cycle. However, the VL node is still valid at 3V. The red and green LEDs are off in this mode.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Table 5. LED States

| CHARGE MODE           | GREEN LED   | RED LED   | CONDITIONS                       |
|-----------------------|-------------|-----------|----------------------------------|
| Li+ mode or NiMH/NiCd | OFF         | ON        | • Prequalification • Fast charge |
| mode                  | ON          | OFF       | • Top-off charge • Timeout       |
| Disable mode          | OFF         | OFF       | • Charger is off                 |
| No-battery mode       | OFF         | OFF       | • V BATT+ = 4.0V                 |

## No-Battery Mode

In no-battery mode, an external load can be connected across the BATT+ and BATT- pads. In this mode, the charger regulates the output to 4.0V, regardless of the state of jumper JU6 (SELV), and can supply the maximum load current set by resistor R1. The red and green LEDs are off.

## LEDs

The red D1 and green D2 LEDs are visual indicators that power is connected to the EV kit and the status of a connected battery. Table 5 describes the state of the LEDs during normal operation. LED brightness can be reconfigured by cutting open the PC board shorts across the R3 and R4 PC board pads and installing desired resistors.

## ACOK Output

The ACOK output indicates when a supply is present at VIN and the voltage is in the safe range for charging batteries. ACOK asserts low when VIN is in the safe range of 4.5V and 6.5V and (VIN-BATT+) ≥ 100mV. ACOK asserts high when VIN is out of this range. The ACOK pin  is  an  open-drain  output,  and  resistor  R2  is used to pull the output up to the external voltage connected at the VLOGIC pad.

## MAX1501 Evaluation Kit

<!-- image -->

Figure 1. MAX1501 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1501 Evaluation Kit

<!-- image -->

Figure 2. MAX1501 EV Kit Component Placement GuideComponent Side

Figure 3. MAX1501 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4. MAX1501 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600  \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ 6