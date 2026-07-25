<!-- lastmod 2022-08-03 -->
## General Description

The MAX8556 evaluation kit (EV kit) is a fully assembled and tested surface-mount circuit board demonstrating the  MAX8556 low-dropout (LDO) regulator. The EV kit comes assembled with a MAX8556ETE circuit that steps down a 1.425V to 3.6V input voltage range to a 1.2V output capable of sourcing up to 4A (limited by power dissipation). The MAX8556 features a POK output that goes high impedance once the output is within ±10% of its regulation value. The device utilizes an internal  p-channel MOSFET for reduced dropout and quiescent current. In addition, the p-channel MOSFET eliminates the need for an external bias or noisy charge pump. The MAX8556 EV kit can also be used to evaluate the MAX8557 with no component changes.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                              |
|---------------|-------|--------------------------------------------------------------------------|
| C1-C4         |     4 | 10µF ± 20%, 6.3V X5R ceramic capacitors (0805) Taiyo Yuden JMK212BJ106MG |
| JU1           |     1 | 3-pin header Sullins PTC36SAAN                                           |
| R1            |     1 | 100k Ω ± 5% resistor (0603)                                              |
| R2            |     1 | 1.40k Ω ± 0.1% resistor (0603) Vishay TNPW06031401BT9RT1                 |
| R3            |     1 | 1k Ω ± 0.1% resistor (0603) Panasonic ERA3YEB102V                        |
| U1            |     1 | MAX8556ETE (16-pin Thin QFN)                                             |
| None          |     1 | Shunt                                                                    |
| None          |     1 | MAX8556EVKIT PC board                                                    |

<!-- image -->

Features

- ♦ 1.425V to 3.6V Input Voltage Range
- ♦ 1.2V Output Voltage
- ♦ Up to 4A Output Current
- ♦ Low Dropout Voltage (200mV max at 4A)
- ♦ Internal p-Channel MOSFET Pass Transistor
- ♦ Power-OK (POK) Output
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE            |
|--------------|--------------|-----------------------|
| MAX8556EVKIT | 0°C to +70°C | 16 Thin QFN 5mm x 5mm |

Note: To evaluate the MAX8557, request a MAX8557ETE free sample with the MAX8556 EV kit.

## Component Suppliers

| SUPPLIER    | COMPONENT   | PHONE        | WEBSITE                  |
|-------------|-------------|--------------|--------------------------|
| Panasonic   | Resistors   | 714-373-7366 | www.maco.panasonic.co.jp |
| Taiyo Yuden | Capacitors  | 408-573-4150 | www.t-yuden.com          |
| Vishay      | Resistors   | 402-563-6866 | www.vishay.com           |

Note:

Indicate that you are using the MAX8556/MAX8557 when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

1

## MAX8556 Evaluation Kit

## Recommended Equipment

- One 4V, 5A variable-output power supply
- Dummy load capable of sinking 4A
- Digital multimeter (DMM)

## Quick Start

The MAX8556 EV kit is fully assembled and tested. Follow these steps to verify board operation:

- 1) Preset the power supply to 1.425V and turn off the power supply. Do not turn on the power supply until all connections are made.
- 2) Verify that the shunt is across pins 2 and 3 of JU1 to enable the device.
- 3) Connect the positive lead of the power supply to the VIN pad on the EV kit, and the negative lead of the power supply to the GND pad on the EV kit.
- 4) Connect the positive input of the DMM to the VOUT pad on the EV kit, and the negative input of the DMM to the GND pad on the EV kit to measure the output voltage.
- 5) Turn on the power supply and verify that the output voltage is 1.2V ±1%.
- 6) Sweep the input voltage from +1.425V to +3.6V. Verify  that  the  output  voltage  is  1.2V  ±1%  over  the entire input range.
- 7) Set the power supply to 2V.
- 8) Connect the 4A load between the VOUT and GND pads on the EV kit.
- 9) Verify that the output voltage is 1.2V ±1%.

## Detailed Description

## Adjusting the Output Voltage

R2 and R3 are used to adjust the output voltage for the MAX8556. To adjust the output voltage, replace R2 with a 0.1% resistor that is calculated as:

R2 = 1 x 10 3 x ((VOUT / VFB) - 1)

where VFB is 0.5V and VOUT is the desired output voltage.

## POK Output

The MAX8556 has an open-drain POK output that goes high impedance after the output is within ±10% of the regulation voltage. On the EV kit, R1 pulls up POK to VIN. The MAX8556 EV kit can also be used to evaluate the MAX8557. In this case, the POK output becomes the POR output.

## Shutdown

The MAX8556 features a shutdown mode to power down the output and reduce input current. To shut down the device, place the shunt between positions 1 and 2 of JU1. To operate normally, place the shunt between positions 2 and 3 of JU1.

## Jumper Settings

## Table 1. Jumper JU1 Functions (EN)

| SHUNT LOCATION   | EN CONNECTION    | OPERATION       |
|------------------|------------------|-----------------|
| 1 and 2          | Connected to GND | Output disabled |
| 2 and 3          | Connected to VIN | Output enabled  |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX8556 Evaluation Kit

<!-- image -->

Figure 1. MAX8556 EV Kit Schematic

Figure 2. MAX8556 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

<!-- image -->

Figure 3. MAX8556 EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8556 Evaluation Kit

<!-- image -->

Figure 4. MAX8556 EV Kit PC Board Layout-Layer 2

Figure 5. MAX8556 EV Kit PC Board Layout-Layer 3

<!-- image -->

Figure 6. MAX8556 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

- 4 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600