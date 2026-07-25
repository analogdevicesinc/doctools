<!-- lastmod 2022-08-03 -->
<!-- image -->

## General Description

The MAX16803 evaluation kit (EV kit) demonstrates a current-controlled, high-output-current LED driver based on the MAX16803 current regulator. The EV kit is capable of supplying regulated output currents of up to 350mA, can run at supply voltages between 6.5V and 40V, and can operate at temperatures ranging from -40°C to +125°C.

The MAX16803 EV kit features a PWM dimming control, user-selectable three-level output current setting, and a 5V-regulated output, which can supply up to 4mA of output current. The MAX16803 EV kit is a fully assembled and tested board.

## Component List

| DESIGNATION               |   QTY | DESCRIPTION                                                                                 |
|---------------------------|-------|---------------------------------------------------------------------------------------------|
| C1                        |     1 | 0.1µF, 50V X7R ceramic capacitor (0603) Murata GRM188R71H104KA93D or TDK C1608X7R1H104K     |
| C2                        |     1 | 0.1µF, 10V X7R ceramic capacitor (0402) Murata GRM155R71C104KA88D or KEMET C0402C104K8RACTU |
| J1, J2                    |     2 | 0.1in, 3-pin headers (through hole)                                                         |
| J3, PWM_IN, RSNS, VIN, V5 |     5 | 0.1in, 2-pin headers (through hole)                                                         |
| LED+, LED-                |     2 | 0.1in, 1-pin headers (through hole)                                                         |
| R1                        |     1 | 0.56 Ω ±1%, 1/4W resistor (0805) Susumu RP2012T-R56-F                                       |
| R2                        |     1 | 0.82 Ω ±1%, 1/4W resistor (0805) Susumu RP2012T-R82-F                                       |
| U1                        |     1 | High-output-current LED driver (16 TQFN-EP*) Maxim MAX16803ATE+                             |
| -                         |     1 | PCB: MAX16803 Evaluation Kit+                                                               |

## Features

- ♦ 6.5V to 40V Supply Voltage Range
- ♦ Selectable 150mA, 250mA, or 350mA Output Current
- ♦ 5V-Regulated Output
- ♦ PWM Dimming Control
- ♦ Package Dissipates Up to 2.666W at TA = +70°C
- ♦ Lead-Free and RoHS compliant
- ♦ Fully Assembled and Tested

Figure 1. MAX16803 EV Kit Board

<!-- image -->

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX16803EVKIT+ | EV Kit |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| KEMET Corp.                            | 864-963-6300 | www.kemet.com               |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| Susumu International USA               | 208-328-0307 | www.susumu-usa.com          |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |

Note: Indicate that you are using the MAX16803 when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX16803 Evaluation Kit

Figure 2. MAX16803 EV Kit Schematic

<!-- image -->

## Quick Start

## Recommended Equipment

Before beginning, the following equipment is needed:

- 0 to 30V or above, 0.5A DC power supply

## Procedure

The MAX16803 EV kit is fully assembled and tested. Follow these steps to verify operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Connect a DC power supply (0 to 30V or above, 0.5A) to VIN.
- 2) Place jumper J1 between pins 1-2 to enable U1.
- 3) Close jumper J3.
- 4) Open all pins of jumper J2 to select 150mA output current.
- 5) Connect a 350mA-rated LED between LED+ and LED-.
- 6) Turn on the power supply and increase the input voltage above 6.5V. The LED glows with full brightness. Measure the LED current, and it shows 150mA ±3.5%.
- 7) Increase the supply voltage to 16V and the LED current will be stable. Measure the LED current and it  shows  150mA ±3.5%. Measure voltage across V5, and it shows 5.27V ±5%.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX16803 Evaluation Kit

## Detailed Description of Hardware

The MAX16803 EV kit demonstrates a high-output-current LED driver with accurate current control based on the MAX16803 current regulator. This EV kit is capable of supplying regulated output currents of up to 350mA and can run at supply voltages between 6.5V and 40V. If  the  supply  voltage  is  above  the  LED  operating  voltage by more than 7.5V, then the maximum output current should be limited to prevent the device from entering into thermal shutdown due to excessive power dissipation.

The MAX16803 EV kit features PWM dimming to control the LED brightness by varying the duty cycle of the PWM input signal. Users can select between three levels  of  output  LED  currents  by  setting  jumper  J3  (see Table 1 for jumper settings). The MAX16803 EV kit also includes a connection for the 5V-regulated output and access to the on-board current-sense resistor.

## Output Current Setting

The output current can be set to 150mA, 250mA, or 350mA by adjusting the position of jumper J3 (see Table 1 for jumper settings). The current-sense resistor is accessible through the RSNS connector. The output current can be adjusted by removing R2 or R3, opening all  the  pins  of  J3,  and  then  connecting  a  resistor across RSNS with a value calculated using the following equation:

<!-- formula-not-decoded -->

where RSNS is the external current-sense resistor and I OUT is the desired output current.

## PWM Dimming

The PWM dimming is for controlling the LED brightness by adjusting the duty cycle of the PWM input signal connected to the PWM\_IN input. A HIGH at PWM\_IN input turns on the output current and a LOW turns off the  output  current.  Connect a signal with peak amplitude between 5V and 40V and with frequency between 100Hz and 2kHz and vary the duty cycle to adjust the LED brightness. LED brightness increases when duty cycle increases and vice versa. Duty cycle can be as low as 10% even at a PWM frequency of 2kHz.

<!-- image -->

## Power Dissipation

Thermal shutdown turns the device off if power dissipation in the IC causes the junction temperature to reach +155°C (typ). An external resistor can be added at the input to the device or in series with LED to reduce the power dissipation in the IC. The resistor's power rating should be higher than I 2 R. (I is the input current or LED current, and R is the value of the added resistor.)

Use the following equation to calculate the maximum LED current that can be drawn from the device without causing a thermal shutdown:

<!-- formula-not-decoded -->

where 2.666W is the maximum power dissipation capacity of the device when mounted on a board as per JEDEC specifications with ambient temperature below +70°C. VIN is the input supply voltage and VLED is the operating voltage of the LED.

## 5V-Regulated Output

The +5V regulator can be used to power other components from the V5 connector. The 5V output can supply up to 4mA of current and is not disabled during PWM off.

## Jumper Selection

Three-pin jumper J1 controls the EN pin of the MAX16803 and can enable or disable the device. Three-pin jumper J2 can select between three different output current settings. Two-pin jumper J3 controls the PWM input of the device. Close J3 to disable PWM dimming. Table 1 lists the jumper options.

Table 1. Jumper J1, J2, and J3 Functions

| JUMPER   | SHUNT POSITION AND FUNCTION            | SHUNT POSITION AND FUNCTION            | SHUNT POSITION AND FUNCTION            |
|----------|----------------------------------------|----------------------------------------|----------------------------------------|
| JUMPER   | 1-2                                    | 2-3                                    | Open                                   |
| J2       | U1 enabled                             | U1 disabled                            | -                                      |
| J2       | 350mA                                  | 250mA                                  | 150mA                                  |
| J3       | Closed: PWM disabled Open: PWM enabled | Closed: PWM disabled Open: PWM enabled | Closed: PWM disabled Open: PWM enabled |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX16803 Evaluation Kit

<!-- image -->

Figure 3. MAX16803 EV Kit Component Placement GuideComponent Side

Figure 4. MAX16803 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 5. MAX16803 EV Kit PCB Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX16803 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION              | PAGES CHANGED   |
|-------------------|-----------------|--------------------------|-----------------|
|                 0 | 8/06            | Initial release          | -               |
|                 1 | 11/08           | Removed LED from EV kit. | 1               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

5