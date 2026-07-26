<!-- lastmod 2022-08-02 -->
## General Description

The MAX1994 evaluation kit (EV kit) is a complete tripleoutput regulator for notebook computer applications. This fully assembled and tested circuit board provides a  digitally  adjustable  0.925V  to  2.000V  output  voltage (5-bit  on-board DAC) for CPU rail, fixed 2.5V output voltage for I/O and memory supplies, and a 1.2V linear regulator for a CPU VID supply. The battery input voltage range is 7V to 24V. The EV kit operates at 300kHz switching frequency and has superior line- and loadtransient response.

The DC-to-DC converter steps down high-voltage batteries and/or AC adapters, generating a precision, dynamically adjustable, low-voltage CPU core rail (BUCK1), and a fixed 2.5V output for I/O and memory supplies (BUCK2). The MAX1994 EV kit consists of the MAX1994 dual Quick-PWM™ master step-down controller and the MAX1980 slave controller. The MAX1994 EV  kit  includes  active  voltage  positioning  with adjustable gain and offset, reducing power dissipation and bulk output capacitance requirements for BUCK1. The MAX1994 includes a specialized digital interface, making it suitable for mobile CPU and video processor applications. The MAX1980 provides additional gatedrive circuitry, phase synchronization, current limit, and current balancing. Precision slew-rate control provides 'just-in-time' arrival at the new DAC setting, minimizing surge currents to and from the battery.

This EV kit can also be used to evaluate the MAX1816, which has an adjustable output from 0.600V to 1.750V using an alternate VID code set.

| DESIGNATION                      |   QTY | DESCRIPTION                                                                             |
|----------------------------------|-------|-----------------------------------------------------------------------------------------|
| C1, C20, C22, C43, C44           |     0 | Not installed (1812)                                                                    |
| C2, C3, C4, C21, C41, C42, C45   |     7 | 10µF, 25V X5R ceramic capacitors (1812) Taiyo Yuden TMK432BJ106KM or TDK C4532X5R1E106M |
| C5, C6, C10, C18, C31, C32, C33  |     7 | 330µF, 2.5V, 10m Ω low-ESR specialty polymer capacitors (E case) Panasonic EEFUE0E331XR |
| C7, C13, C16, C19, C26, C34, C35 |     0 | Not installed (E case)                                                                  |
| C8, C12, C38                     |     3 | 0.22µF, 16V X5R ceramic capacitors (0805) Taiyo Yuden EMK212BJ224KG                     |

Quick-PWM is a trademark of Maxim Integrated Products, Inc.

<!-- image -->

## Features

- ♦ High Speed, Accurate, and Efficient
- ♦ Active Voltage Positioning with Adjustable Gain and Offset
- ♦ Low-Bulk Output Capacitor Count (BUCK1)
- ♦ Multiphase Dual Quick-PWM Architecture BUCK1: 0.925V to 2.000V Output-Voltage Range (5-Bit DAC)
- 40A Load-Current Capability (20A Each Phase) BUCK2: 2.5V Preset Output Voltage (Adjustable with External Resistors)

7A Load-Current Capability

- ♦ 1.2V, 500mA Linear Output Voltage
- ♦ 7V to 24V Input Voltage Range
- ♦ 300kHz Switching Frequency
- ♦ 48-Pin QFN Package (MAX1994)
- ♦ 20-Pin QFN Package (MAX1980)
- ♦ Low-Profile Components
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE                         |
|--------------|--------------|------------------------------------|
| MAX1994EVKIT | 0°C to +70°C | 48 QFN (MAX1994), 20 QFN (MAX1980) |

## Component List

| DESIGNATION             |   QTY | DESCRIPTION                                                      |
|-------------------------|-------|------------------------------------------------------------------|
| C9, C14, C39            |     3 | 0.1µF ceramic capacitors (0805)                                  |
| C11                     |     1 | 47pF ceramic capacitor (0603)                                    |
| C15, C40                |     2 | 2.2µF, 10V X5R ceramic capacitors (0612) TDK C1632X5R1A225KTB09N |
| C49                     |     0 | Not installed (0805)                                             |
| C23, C36                |     2 | 100pF ceramic capacitors (0603)                                  |
| C24                     |     1 | 1000pF ceramic capacitor (0603)                                  |
| C25, C27, C47, C48, C54 |     0 | Not installed (0603)                                             |
| C28, C30                |     2 | 4700pF ceramic capacitors (0603)                                 |
| C29                     |     0 | Not installed (1210)                                             |
| C37                     |     1 | 270pF ceramic capacitor (0805)                                   |
| C53                     |     1 | 3.3µF, 10V X5R ceramic capacitor (0805) TDK C2012X5R1A335K       |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

## MAX1994 Evaluation Kit

| DESIGNATION         |   QTY | DESCRIPTION                                                                             |
|---------------------|-------|-----------------------------------------------------------------------------------------|
| C46                 |     1 | 10µF, 6.3V X5R ceramic capacitor (0805) TDK C2012X5R0J106M or Taiyo Yuden AMK212BJ106MG |
| C50                 |     1 | 4.7µF, 6.3V X5R ceramic capacitor (0805) Taiyo Yuden JMK212BJ475MG                      |
| C54, C55            |     2 | 0.022µF ceramic capacitors (0603)                                                       |
| D1, D4              |     2 | 5A Schottky diodes Central Semiconductor CMSH5-40                                       |
| D2, D5, D7          |     3 | 100mA Schottky diodes Central Semiconductor CMPSH-3                                     |
| D3                  |     1 | 200mA switching diode Central Semiconductor CMPD2838                                    |
| D6                  |     1 | 2A Schottky diode Nihon EC31QS03L                                                       |
| J1                  |     1 | Scope probe connector Berg Electronics 33JR135-1                                        |
| JU1, JU2            |     2 | 4-pin headers                                                                           |
| JUA0-JUA4           |     5 | 2-pin headers                                                                           |
| JU10, JU12, JU13    |     3 | 3-pin headers                                                                           |
| L1, L2              |     2 | 0.6µH, 26A, 0.9m Ω power inductors (13mm x 13mm x 6mm) Panasonic ETQP1H0R6BFA           |
| L3                  |     1 | 1.2µH, 9A, 6.2m Ω power inductor (10mm x 10mm x 5.6mm) Sumida CDEP105-1R2MC-32          |
| N1, N4, N9, N10     |     4 | N-channel MOSFETs (8-pin SO) International Rectifier IRF7811W or Fairchild FDS6694      |
| N2, N5, N6, N8, N11 |     5 | N-channel MOSFETs (8-pin SO) International Rectifier IRF7822 or Fairchild FDS6688       |
| N13                 |     1 | N-channel MOSFET (8-pin SO) International Rectifier IRF7811AV                           |
| P1                  |     0 | Not installed, P-channel MOSFET (SOT23) Fairchild NDS0605 or Fairchild FDV304P          |
| Q1                  |     1 | PNP power transistor (SOT23) Zetex FZT749                                               |

## Component List (continued)

| DESIGNATION                                             |   QTY | DESCRIPTION                                                          |
|---------------------------------------------------------|-------|----------------------------------------------------------------------|
| R1-R5, R11, R17, R18, R20, R21, R28, R30, R60, R61, R62 |     0 | Not installed (0603)                                                 |
| R55                                                     |     1 | 10 Ω ±5% resistor (0603)                                             |
| R6, R8, R9, R56, R59                                    |     5 | 0 Ω resistors (0603)                                                 |
| R7, R15, R37, R50, R58                                  |     0 | Not installed (short PC trace) (0805)                                |
| R10, R42                                                |     2 | 280k Ω ±1% resistors (0603)                                          |
| R12, R45                                                |     2 | 0.001 Ω ±1%, 1W resistors (2512) Panasonic ERJM1WTF1M0U              |
| R13, R29                                                |     2 | 49.9k Ω ±1% resistors (0603)                                         |
| R14, R16, R41, R44, R63                                 |     0 | Not installed (0805)                                                 |
| R19, R27, R31                                           |     3 | 4.99k Ω ±1% resistors (0603)                                         |
| R22-R26                                                 |     5 | 100k Ω ±5% resistors (0805)                                          |
| R32                                                     |     1 | 10 Ω ±5% resistor (0805)                                             |
| R33, R34, R35, R46                                      |     4 | 200 Ω ±5% resistors (0603)                                           |
| R36, R54, R57                                           |     3 | 100k Ω ±5% resistors (0805)                                          |
| R38                                                     |     1 | 143k Ω ±1% resistor (0805)                                           |
| R39                                                     |     1 | 0.005 Ω ±5%, 1W resistor (2512) Panasonic ERJM1WSF5M0U               |
| R40                                                     |     1 | 100 Ω ±5% resistor (0603)                                            |
| R43                                                     |     1 | 20k Ω ±5% resistor (0805)                                            |
| R47                                                     |     1 | 20 Ω ±5% resistor (0805)                                             |
| R48, R49                                                |     2 | 4.7 Ω ±5% resistors (0603)                                           |
| R51                                                     |     1 | 220 Ω ±5% resistor (0805)                                            |
| R52                                                     |     1 | 20k Ω ±1% resistor (0805)                                            |
| R53                                                     |     1 | 100k Ω ±1% resistor (0805)                                           |
| U1                                                      |     1 | MAX1994ETM (48-pin QFN)                                              |
| U2                                                      |     0 | Not installed, single-logic inverter (5-pin SOT23) Fairchild NC7SZ04 |
| U3                                                      |     1 | MAX1980EGP (20-pin QFN)                                              |
| None                                                    |    10 | Shunts                                                               |
| None                                                    |     4 | Rubber bumpers 3M SJ-5007 Mouser 517-SJ-5007BK or equivalent         |
| None                                                    |     1 | MAX1994 PC board                                                     |
| None                                                    |     1 | MAX1994 EV kit data sheet                                            |
| None                                                    |     1 | MAX1816/MAX1994 data sheet                                           |
| None                                                    |     1 | MAX1980 data sheet                                                   |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Quick Start

- 1) Ensure that the circuit is connected correctly to the supplies and dummy load prior to applying any power.
- 2) Verify that the shunts are across JU10 pins 1 and 2 ( DPSLP ), JU12 pins 2 and 3 (SUS), and JU13 pins 1 and 2 (PERF). The DAC code settings (D4-D0) are set for 1.250V output through installed jumpers JUA3, JUA2, and JUA1.
- 3) Turn on the battery power before turning on the 3.3V and 5V bias power supplies. Turn on the 3.3V bias power supply and then turn on +5V bias power.
- 4) Observe the 1.250V (VOUT1) output voltage with the DMM and/or oscilloscope. Look at the LX switching nodes and MOSFET gate-drive signals while varying the load current.
- 5) Observe the 2.5V (VOUT2) and 1.2V (V\_VID) output voltages with the DMMs and/or oscilloscope.

<!-- image -->

## MAX1994 Evaluation Kit

## Component Suppliers

| SUPPLIER                | PHONE        | FAX          | WEBSITE               |
|-------------------------|--------------|--------------|-----------------------|
| Central Semiconductor   | 516-435-1110 | 516-435-1824 | www.centralsemi.com   |
| Fairchild               | 408-721-2181 | 408-721-1635 | www.fairchildsemi.com |
| International Rectifier | 310-322-3331 | 310-322-3332 | www.irf.com           |
| Panasonic               | 714-373-7939 | 714-373-7183 | www.panasonic.com     |
| Sumida                  | 708-956-0666 | 708-956-0702 | www.sumida.com        |
| Taiyo Yuden             | 408-573-4150 | 408-573-4159 | www.t-yuden.com       |
| TDK                     | 847-390-4373 | 847-390-4428 | www.component.tdk.com |
| Toko                    | 408-432-8281 | 408-943-9790 | www.tokoam.com        |

Note: Please indicate that you are using the MAX1994 and MAX1980 when contacting these component suppliers.

## Recommended Equipment

- 7V to 24V, &gt;50W power supply, battery, or notebook AC adapter
- DC bias power supply, 5V at 100mA
- DC bias power supply, 3.3V at 500mA
- One or more dummy loads capable of sinking 40A total
- Dummy load capable of sinking 7A
- Dummy load capable of sinking 0.5A
- Digital multimeters (DMMs)
- 100MHz dual-trace oscilloscope

## Detailed Description

## Setting the Output Voltage

The MAX1994 has a unique internal VID input multiplexer that can select one of two different VID DAC code settings for different processor states. Depending on the logic level at SUS (JU12), the suspend mode multiplexer selects the VID DAC code settings from either the voltage at the D0-D4 inputs, or the S0/S1 (JU1, JU2) input decoder. The output voltage can be digitally set from 0.925V to 2.000V (Table 1) from the D0-D4 pins and from 0.700V to 1.075V (Table 2) from S0/S1 pins. There are four different ways to set the output voltage:

- 1) Drive the external VID0-VID4 inputs (no jumpers installed). The output voltage can be set by driving the VID0-VID4 with open-drain drivers (pullup resistors are included on the board) or 3V/5V CMOS output logic levels (SUS = low, shunt is across JU12 pins 2 and 3).
- 2) Install jumpers JUA0-JUA4. SUS = low (shunt is across JU12 pins 2 and 3). When JUA0-JUA4 are not installed,  the  MAX1994's D0-D4 inputs are at logic 1 (connected to VDD). When JUA0-JUA4 are installed, D0-D4 inputs are at logic 0 (connected to GND). The output voltage can be changed during operation by installing and removing jumpers JUA0-JUA4. As shipped, the EV kit is configured with jumpers JUA0-JUA4 set for 1.250V output (Table 1). Refer to the MAX1994 data sheet for more information.
- 3) Suspend mode configuration. SUS = high (shunt is  across JU12 pins 1 and 2). As shipped, the EV kit is configured for operation in the suspend mode S0/S1 set for 0.850V output (Table 2).
- 4) Drive DPSLP . DPSLP can be driven by an external driver  or  through  JU10  to  introduce  offsets  to  the output voltage (Table 3).

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1994 Evaluation Kit

## Table 1. MAX1994 Output-Voltage Adjustment Settings (SUS = Low)

|   D4 JAU4 |   D3 JUA3 |   D2 JUA2 |   D1 JUA1 |   D0 JUA0 |   VOUT (V) MAX1816 | VOUT (V) MAX1994   |
|-----------|-----------|-----------|-----------|-----------|--------------------|--------------------|
|         0 |         0 |         0 |         0 |         0 |              1.750 | 2.000              |
|         0 |         0 |         0 |         0 |         1 |              1.700 | 1.950              |
|         0 |         0 |         0 |         1 |         0 |              1.650 | 1.900              |
|         0 |         0 |         0 |         1 |         1 |              1.600 | 1.850              |
|         0 |         0 |         1 |         0 |         0 |              1.550 | 1.800              |
|         0 |         0 |         1 |         0 |         1 |              1.500 | 1.750              |
|         0 |         0 |         1 |         1 |         0 |              1.450 | 1.700              |
|         0 |         0 |         1 |         1 |         1 |              1.400 | 1.650              |
|         0 |         1 |         0 |         0 |         0 |              1.350 | 1.600              |
|         0 |         1 |         0 |         0 |         1 |              1.300 | 1.550              |
|         0 |         1 |         0 |         1 |         0 |              1.250 | 1.500              |
|         0 |         1 |         0 |         1 |         1 |              1.200 | 1.450              |
|         0 |         1 |         1 |         0 |         0 |              1.150 | 1.400              |
|         0 |         1 |         1 |         0 |         1 |              1.100 | 1.350              |
|         0 |         1 |         1 |         1 |         0 |              1.050 | 1.300              |
|         0 |         1 |         1 |         1 |         1 |              1.000 | No CPU             |
|         1 |         0 |         0 |         0 |         0 |              0.975 | 1.275              |
|         1 |         0 |         0 |         0 |         1 |              0.950 | 1.250              |
|         1 |         0 |         0 |         1 |         0 |              0.925 | 1.225              |
|         1 |         0 |         0 |         1 |         1 |              0.900 | 1.200              |
|         1 |         0 |         1 |         0 |         0 |              0.875 | 1.175              |
|         1 |         0 |         1 |         0 |         1 |              0.850 | 1.150              |
|         1 |         0 |         1 |         1 |         0 |              0.825 | 1.125              |
|         1 |         0 |         1 |         1 |         1 |              0.800 | 1.100              |
|         1 |         1 |         0 |         0 |         0 |              0.775 | 1.075              |
|         1 |         1 |         0 |         0 |         1 |              0.750 | 1.050              |
|         1 |         1 |         0 |         1 |         0 |              0.725 | 1.025              |
|         1 |         1 |         0 |         1 |         1 |              0.700 | 1.000              |
|         1 |         1 |         1 |         0 |         0 |              0.675 | 0.975              |
|         1 |         1 |         1 |         0 |         1 |              0.650 | 0.950              |
|         1 |         1 |         1 |         1 |         0 |              0.625 | 0.925              |
|         1 |         1 |         1 |         1 |         1 |              0.600 | No CPU             |

## BUCK1 Output Voltage Offset Control ( DPSLP and OFS\_)

The MAX1994 supports three independent offsets to the voltage-positioned output. The offsets are adjusted using resistive voltage-dividers at the OFS0, OFS1, and OFS2 inputs. The offset control inputs are selected using a combination of the three logic inputs (SUS, PERF, and DPSLP ),  which  also  define  the  operating mode for the MAX1994. Table 3 details which OFS input is  selected based on these control inputs. The default for this EV kit is for zero offsets. Refer to the MAX1994 data sheet for more information.

Table 2. MAX1994 Output-Voltage Adjustment Settings, Suspend Mode (SUS = High)

| SHUNT LOCATION JU2   | SHUNT LOCATION JU1   | S1 PIN   | S0 PIN   |   OUTPUT VOLTAGE (V) |
|----------------------|----------------------|----------|----------|----------------------|
| 1, 2                 | 1, 2                 | GND      | GND      |                1.075 |
| 1, 2                 | 1, 3                 | GND      | REF      |                1.050 |
| 1, 2                 | Not installed        | GND      | OPEN     |                1.025 |
| 1, 2                 | 1, 4                 | GND      | V CC     |                1.000 |
| 1, 3                 | 1, 2                 | REF      | GND      |                0.975 |
| 1, 3                 | 1, 3                 | REF      | REF      |                0.950 |
| 1, 3                 | Not installed        | REF      | OPEN     |                0.925 |
| 1, 3                 | 1, 4                 | REF      | V CC     |                0.900 |
| Not installed        | 1, 2                 | OPEN     | GND      |                0.875 |
| Not installed        | 1, 3                 | OPEN     | REF      |                0.850 |
| Not installed        | Not installed        | OPEN     | OPEN     |                0.825 |
| Not installed        | 1, 4                 | OPEN     | V CC     |                0.800 |
| 1, 4                 | 1, 2                 | V CC     | GND      |                0.775 |
| 1, 4                 | 1, 3                 | V CC     | REF      |                0.750 |
| 1, 4                 | Not installed        | V CC     | OPEN     |                0.725 |
| 1, 4                 | 1, 4                 | V CC     | V CC     |                0.700 |

## Reduced Power Dissipation Voltage Positioning

The MAX1994 EV kit can use voltage positioning to decrease the size of the output capacitor and to reduce power dissipation at heavy loads. A current-sense resistor (R12, 1m Ω ) is used to sense the inductor current and adjust the output voltage. The current-sense resistor dissipates some power, but the net power savings are substantial. The default setting for this EV kit has voltage positioning disabled. However, with the op-amp gain configured for 4 (per phase), the voltage-positioning slope can bet set at -2mV/A at the output.

## Dynamic Output-Voltage Transition Experiment

Observe the output-voltage transition between 0.850V and 1.250V by setting jumpers JUA0-JUA4 to 1.250V and toggling the SUS input between GND and VCC, respectively. This is the worst-case transition, and should complete within 100µs.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Table 3. MAX1994 Offset Selection Truth Table

|                                 | INPUT    | INPUT     | INPUT      | ACTIVE OFS INPUTS   | ACTIVE OFS INPUTS   | ACTIVE OFS INPUTS   |
|---------------------------------|----------|-----------|------------|---------------------|---------------------|---------------------|
| MODE                            | SUS JU12 | PERF JU13 | DPSLP JU10 | OFS2                | OFS1                | OFS0                |
| Battery sleep (offset = 0%)     | 0        | 0         | 0          | 1                   | 0                   | 0                   |
| Battery (offset = 0%)           | 0        | 0         | 1          | 0                   | 1                   | 0                   |
| Performance sleep (offset = 0%) | 0        | 1         | 0          | 0                   | 0                   | 1                   |
| Performance                     | 0        | 1         | 1          | 0                   | 0                   | 0                   |
| Suspend                         | 1        | 0         | 0          | 0                   | 0                   | 0                   |
| Suspend                         | 1        | 0         | 1          | 0                   | 0                   | 0                   |
| Suspend                         | 1        | 1         | 0          | 0                   | 0                   | 0                   |
| Suspend                         | 1        | 1         | 1          | 0                   | 0                   | 0                   |

This EV kit is set to transition the output voltage at 9mV/µs. The speed of the transition can be altered by changing resistor R38 (143k Ω ). During the voltage transition, watch the inductor current by looking across R12 with a differential scope probe, or by inserting a current probe in series with the inductor. Observe the low, wellcontrolled inductor current that accompanies the voltage transition. The same slew-rate and controlled inductor  current are used during shutdown and startup, resulting in well-controlled currents into and out of the battery (input source).

There are two other methods to create an output-voltage transition. Select D0-D4 (JUA0-JUA4). Then either manually change the JUA0-JUA4 jumpers to a new VID code setting (Table 1), or remove all jumpers and drive the VID0-VID4 PC board test points externally to the desired code settings.

<!-- image -->

## MAX1994 Evaluation Kit

## Disabling the MAX1980

For  lower  output  current  CPU  applications,  the MAX1980 slave controller can be disabled by cutting the trace shorting pins 1 and 2 of JU11. The slope of the  voltage-positioned load line is decreased by onehalf. Changing the setting of the gain pin can compensate for the reduced slope. With the slave disabled, the MAX1994 can be operated in skip mode.

## Load-Transient Experiment

One interesting experiment is to subject the output to large, fast-load transients and observe the output with an oscilloscope. This necessitates careful instrumentation of the output, using the supplied scope-probe jack. Accurate measurement of output ripple and load-transient response invariably requires that ground clip leads be completely avoided and that the probe hat be removed to expose the GND shield, so the probe can be plugged directly into the jack. Otherwise, EMI and noise pickup may corrupt the waveforms.

Most benchtop electronic loads intended for powersupply testing lack the ability to subject the DC-to-DC converter to ultra-fast load transients. Emulating the supply current dI/dt at the CPU VCORE pins requires at least 10A/µs load transients. One easy method for generating such an abusive load transient is to solder a power MOSFET directly across the scope-probe jack. Then drive its gate with a strong pulse generator at a low duty cycle (&lt;5%) to minimize heat stress in the MOSFET. Vary the high-level output voltage of the pulse generator to vary the load current.

To determine the load current, you might expect to insert a meter in the load path, but this method is prohibited here by the need for low resistance and inductance in the path of the dummy load MOSFET. There are two easy alternative methods of determining how much load current a particular pulse-generator amplitude is causing. The easiest method is to observe the currents through inductors L1 and L2 with a calibrated AC current probe or by looking across R12 and R45 with a differential probe. In the buck topology, the load current is approximately equal to the average value of the inductor currents.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1994 Evaluation Kit

Figure 1. MAX1994 EV Kit Schematic (Sheet 1 of 4)

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1994 Evaluation Kit

Figure 1. MAX1994 EV Kit Schematic (Sheet 2 of 4)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1994 Evaluation Kit

Figure 1. MAX1994 EV Kit Schematic (Sheet 3 of 4)

<!-- image -->

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1994 Evaluation Kit

Figure 1. MAX1994 EV Kit Schematic (Sheet 4 of 4)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1994 Evaluation Kit

## Jumper and Switch Settings Table 4. Jumper JU3 Function (FB2)

| SHUNT POSITION   | FB2 PIN                                                                                             | MAX1994 OUTPUT                                                                                                         |
|------------------|-----------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------|
| 1 and 2          | Connected to VCC                                                                                    | V OUT2 = 1.8V                                                                                                          |
| 2 and 3          | Connected to GND                                                                                    | V OUT2 = 2.5V                                                                                                          |
| Not installed    | Connected to resistor-divider R61/R62. (Cut PC trace shorting JU2 pins 2 and 3 on the solder side.) | Adjustable mode 1.0V < V OUT < 5.5V. (Refer to the MAX1994 data sheet for selection of output capacitor and inductor.) |

## Table 5. Jumper JU4 Function (SKP1/ SDN )

| SHUNT POSITION   | SKP1/ SDN PIN                           | MAX1994 OUTPUT                                                                                       |
|------------------|-----------------------------------------|------------------------------------------------------------------------------------------------------|
| 1 and 2          | Connected to VCC                        | BUCK1 output enabled. Normal PFM/PWM operation. V OUT1 is selected by VID DAC code (D0-D4) settings. |
| 2 and 3          | Connected toGND                         | Shutdown mode, V OUT1 = 0V                                                                           |
| Not installed    | Floating. Connected to SKIP1/ SHDN pad. | Low-noise forced-PWM operation. (MAX1994 must be driven by an external signal.)                      |

## Table 6. Jumper JU6 Function (Polarity Selection, MAX1980)

| SHUNT POSITION   | POL PIN          | TRIGGER POLARITY SELECT                                                                             |
|------------------|------------------|-----------------------------------------------------------------------------------------------------|
| 1 and 2          | Connected to VCC | Trigger on the rising edge (default).                                                               |
| 2 and 3          | Connected to GND | Trigger on the falling edge. Install additional input capacitors C1 and C20 for in-phase operation. |

## Table 7. Jumper JU7 Function (SKP2/ SDN )

| SHUNT POSITION   | SKP2/ SDN PIN    | MAX1994 OUTPUT                                                          |
|------------------|------------------|-------------------------------------------------------------------------|
| 1 and 2          | Connected to VCC | BUCK2 output enabled, normal PFM/PWM operation (default), V OUT2 = 2.5V |
| 2 and 3          | Connected to GND | Shutdown mode                                                           |
| Not installed    | Floating         | Low-noise forced-PWM operation, V OUT2 = 2.5V                           |

## Table 8. Jumper JU8 Function (LIN/ SDN )

| SHUNT POSITION   | LIN/ SDN PIN     | MAX1994 OUTPUT                                 |
|------------------|------------------|------------------------------------------------|
| 1 and 2          | Connected to VCC | Linear-regulator output enabled, V_VID = 1.20V |
| 2 and 3          | Connected to GND | Shutdown mode, V_VID = 0V                      |

## Table 9. Jumper JU12 Function (Suspend Mode)

| SHUNT POSITION   | SUS PIN          | EFFECT                                                                          |
|------------------|------------------|---------------------------------------------------------------------------------|
| 1 and 2          | Connected to VCC | The suspend mode VID code, as programmed by S0 and S1, is delivered to the DAC. |
| 2 and 3          | Connected to GND | The suspend mode multiplexer is not used.                                       |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1994 Evaluation Kit

<!-- image -->

Figure 2. MAX1994 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1994 Evaluation Kit

Figure 3. MAX1994 EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1994 Evaluation Kit

<!-- image -->

Figure 4. MAX1994 EV Kit PC Board Layout-GND Layer 2

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1994 Evaluation Kit

Figure 5. MAX1994 EV Kit PC Board Layout-GND Layer 3

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1994 Evaluation Kit

<!-- image -->

Figure 6. MAX1994 EV Kit PC Board Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1994 Evaluation Kit

Figure 7. MAX1994 EV Kit Component Placement Guide-Bottom Silkscreen

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

16

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600