import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'

@EventData({
    name: 'EV-1', 
    hitbox: {
        width: 32,
        height: 16
    }
})
export class VillagerEvent extends RpgEvent {
    onInit() {
        this.setGraphic('female132')
    }
    async onAction(player: RpgPlayer) {

        if(this.getVariable("cucomido")) {
            return await player.showText("Meu cu tá ardendo :(", {
                talkWith: this
            });
        }
        await player.showText('POR FAVOR NÃO COMA MEU CU! SE VC N COMER EU TE DOU 10 DE GOLD', {
            talkWith: this
        });
        const escolha = await player.showChoices("O que você vai escolher", [
            {
                text: "Comer o cu do macaco",
                value: 1
            },
            {
                text: "Pegar os 10 de gold",
                value: 2
            }
        ]);

        if(escolha?.value === 1) {
            await player.showText("Você comeu o cu do macaco.");
            this.setVariable("cucomido", true);
        } else {
            await player.showText("Você ganhou +10 Gold!");
            player.gold += 10
        }
    }
} 