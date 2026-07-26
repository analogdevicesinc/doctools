<!-- lastmod 2022-08-03 -->
## General Description

The MAX5086 evaluation kit (EV kit) allows the user to evaluate the features of the MAX5086 high-voltage linear regulator including the remote output-voltage sensing capability. This EV kit is a fully assembled and tested surface-mount board.

The MAX5086 EV kit supplies an output current of up to 250mA at a 3.3V or 5.0V output and operates up to a 45V input voltage. This EV kit also includes connections for  the  active-low  microprocessor reset output and enable input.

Warning: The MAX5086 EV kit operates with high voltages. Dangerous voltages are present on this EV kit and on equipment connected to it. Users who power up this EV kit or power the sources connected to it must be careful to follow safety procedures appropriate to working with high-voltage electrical equipment. Under severe fault or failure conditions, this EV kit may dissipate large amounts of power, which could result in the mechanical ejection of a component or of component debris at high velocity. Operate this EV kit with care to avoid possible personal injury.

| DESIGNATION   |   QTY | DESCRIPTION                                                                                 |
|---------------|-------|---------------------------------------------------------------------------------------------|
| C1            |     1 | 47µF, 63V, +105°C electrolytic capacitor Panasonic EEEFK1J470P                              |
| C2            |     1 | 0.1µF, 50V X7R ceramic capacitor (1206) Murata GRM319R71H104KA01D or KEMET C1206C104M5RACTU |
| C3            |     1 | 22µF, 10V X7R ceramic capacitor (1812) Murata GRM43ER71A226KE01L or TDK C4532X7R1C226M      |

<!-- image -->

## Features

- ♦ 6.5V to 45V Input Voltage Range
- ♦ Up to 250mA Output Current
- ♦ 3.3V or 5V Regulated Output
- ♦ Package Dissipates Up to 3.5W at TA = +70°C
- ♦ Remote Output-Voltage Sensing Capability
- ♦ Active-Low Microprocessor Reset with 50ms Reset Timeout Delay

## Ordering Information

| PART         | TYPE   |
|--------------|--------|
| MAX5086EVKIT | EV Kit |

## Component List

*EP = Exposed pad.

| DESIGNATION                    |   QTY | DESCRIPTION                                                   |
|--------------------------------|-------|---------------------------------------------------------------|
| EN, GND (2), RESET , VIN, VOUT |     6 | Wire loops                                                    |
| J1                             |     1 | 3-pin through-hole header, 0.1in                              |
| J2, J3                         |     2 | 2-pin through-hole headers, 0.1in                             |
| R1                             |     1 | 0.39 ±1% resistor (0805)                                      |
| R2                             |     1 | 309k ±1% resistor (0805)                                      |
| R3                             |     1 | 102k ±1% resistor (0805)                                      |
| R4                             |     1 | 10k ±1% resistor (0805)                                       |
| U1                             |     1 | High-voltage linear regulator (16 TQFN-EP*) Maxim MAX5086AATE |
| -                              |     1 | PCB: MAX 5086 Evaluation Kit                                  |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| KEMET Corp.                            | 864-963-6300 | www.kemet.com               |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| Panasonic Corp.                        | 800-344-2112 | www.panasonic.com           |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |

Note: Indicate you are using the MAX5086 when contacting component suppliers.

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX5086 Evaluation Kit

## Quick Start

## Recommended Equipment

Before beginning, the following equipment is needed:

- DC power supply (0 to 20V or above, 0.5A or above)
- Voltmeter or oscilloscope

## Procedure

The MAX5086 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed .

- 1) Connect a DC power supply (0 to 20V or above, 0.5A or above) to VIN and GND.
- 2) Connect a voltmeter or oscilloscope and a 1k Ω load from VOUT to GND.
- 3) Ensure jumper J1 connects pins 1-2. Close jumpers J2 and J3.
- 4) Turn on the power supply and increase the input voltage to 6.5V. The output will show 5.0V ±2.5% regulated output. Increase the supply to 20V and the output will be stable at 5V.
- 5) Turn off the power. Open shunt J3 and then turn on the power. The output will show 3.3V ±2.5%.
- 6) The voltage at RESET will  show 3.3V or 5.0V depending on the status of jumper J3

## Caution:

- Do not short-circuit the output when the input supply is above 14V.
- Do not change the position of jumper J3 when power is on.

## Detailed Description

The MAX5086 EV kit allows users to evaluate the features of the MAX5086 high-voltage linear regulator including the remote output-voltage sensing capability. This EV kit can be configured for a regulated output voltage of 3.3V or 5.0V by setting jumper J3 (see Table 1 for the jumper settings), and can supply up to 250mA of output current.

## Output Voltage Selection

The MAX5086 device operates in either a preset voltage mode or an adjustable mode. When jumper J3 is open, resistor R3 grounds the SET pin of the MAX5086

and the device operates in preset voltage mode. In preset  voltage  mode, the internal feedback resistors set the MAX5086's output to 3.3V.

When jumper J3 is closed, the voltage feedback at the SET pin puts the MAX5086 in adjustable voltage mode. In  adjustable  voltage  mode, the device uses the voltage feedback at the SET pin, and external feedback resistors  R2  and  R3  set  the  output  voltage  to  5.0V.  In this mode, the output voltage can be set at any voltage between 2.5V and 11V by adjusting R2 and R3 using the equations below.

<!-- formula-not-decoded -->

where VO is the desired output voltage.

The total resistance must not exceed the maximum set by the leakage current of the SET pin input in the following equation:

<!-- formula-not-decoded -->

## Remote Output-Voltage Sensing

The remote output-voltage sensing feature of the device can be evaluated by intentionally introducing a voltage drop between the OUT pin of the device and the actual output terminal (VOUT) at the edge of the board. This is made possible in the MAX5086 EV kit by resistor R1 connected between the OUT pin of the device and the VOUT terminal, which introduces a voltage drop of approximately 100mV at 250mA of output current. Open jumper J2 to enable resistor R1.

## Reset Output ( RESET )

A supervisory circuit is fully integrated in the MAX5086 and uses the same reference voltage as the regulator. RESET signal goes low if VOUT drops below the preset output voltage threshold, and remains low for at least the timeout period after VOUT rises above the reset voltage threshold.

Capacitor C2 in the MAX5086 EV kit controls the reset timeout period and is designed for a reset timeout period of 50ms. Use the following equation to calculate the value of C2 for a different reset timeout period:

<!-- formula-not-decoded -->

where tRP is the desired reset timeout period in seconds.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Available Output Current Calculation

Use the following equation to approximately calculate the maximum available output current based on the operating conditions:

<!-- formula-not-decoded -->

where TJ is the maximum junction temperature, TA is the ambient temperature, VIN is the applied input voltage, and VOUT is the selected output voltage. Note that the output current is limited by the maximum output current of the device.

## Table 1. Jumper J1, J2, and J3 Functions

| JUMPER   | SHUNT POSITION AND FUNCTION                                                                            | SHUNT POSITION AND FUNCTION                                                                            |
|----------|--------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------|
|          | 1-2                                                                                                    | 2-3                                                                                                    |
| J1       | U1 is enabled                                                                                          | U1 is disabled                                                                                         |
| J2       | Open: R1 is enabled to introduce a voltage drop in the output line to evaluate remote sensing          | Open: R1 is enabled to introduce a voltage drop in the output line to evaluate remote sensing          |
| J3       | Close: External feedback for 5.0V output is enabled Open: Internal feedback for 3.3V output is enabled | Close: External feedback for 5.0V output is enabled Open: Internal feedback for 3.3V output is enabled |

<!-- image -->

Figure 1. MAX5086 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5086 Evaluation Kit

## Jumper Selection

Three-pin jumper J1 controls the EN pin of the MAX5086 and can enable or disable the device. Twopin jumper J2 can short or enable resistor R1. This jumper can be opened to introduce a voltage drop between the OUT pin of the device and the VOUT connection at the edge of the board when load is applied. Two-pin jumper J3 controls the external voltage feedback network and can select between 3.3V or 5.0V at the regulator output. Table 1 lists the jumper options.

## Evaluates:  MAX5086

## MAX5086 Evaluation Kit

<!-- image -->

Figure 2. MAX5086 EV Kit Component Placement Guide-Component Side

Figure 3. MAX5086 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX5086 EV Kit PCB  Layout-Layer 2

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

<!-- image -->

Figure 5. MAX5086 EV Kit PCB Layout-Layer 3

<!-- image -->

## MAX5086 Evaluation Kit

Figure 6. MAX5086 EV Kit PCB Layout Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5086 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                     | PAGES CHANGED   |
|-------------------|-----------------|-----------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 3/07            | Initial release                                                                                                 | -               |
|                 1 | 3/08            | Changed maximum input voltage range from 65V to 45V and increased capacitor C1 value from 10µF/80V to 47µF/63V. | 1, 3            |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->