import { z } from 'zod';

export const DreamBoothPredictionScalarFieldEnumSchema = z.enum(['id','instance_prompt','class_prompt','instance_data','class_data','num_class_images','save_sample_prompt','save_sample_negative_prompt','n_save_sample','save_guidance_scale','save_infer_steps','pad_tokens','with_prior_preservation','prior_loss_weight','seed','resolution','center_crop','train_text_encoder','train_batch_size','sample_batch_size','num_train_epochs','max_train_steps','gradient_accumulation_steps','gradient_checkpointing','learning_rate','scale_lr','lr_scheduler','lr_warmup_steps','use_8bit_adam','adam_beta1','adam_beta2','adam_weight_decay','adam_epsilon','max_grad_norm']);

export default DreamBoothPredictionScalarFieldEnumSchema;
